importScripts("https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js");

function sendPatch(patch, buffers, msg_id) {
  self.postMessage({
    type: 'patch',
    patch: patch,
    buffers: buffers
  })
}

async function startApplication() {
  console.log("Loading pyodide!");
  self.postMessage({type: 'status', msg: 'Loading pyodide'})
  self.pyodide = await loadPyodide();
  self.pyodide.globals.set("sendPatch", sendPatch);
  console.log("Loaded!");
  await self.pyodide.loadPackage("micropip");
  const env_spec = ['https://cdn.holoviz.org/panel/0.14.2/dist/wheels/bokeh-2.4.3-py3-none-any.whl', 'https://cdn.holoviz.org/panel/0.14.2/dist/wheels/panel-0.14.2-py3-none-any.whl', 'pyodide-http==0.1.0', 'holoviews>=1.15.1', 'hvplot', 'pandas']
  for (const pkg of env_spec) {
    let pkg_name;
    if (pkg.endsWith('.whl')) {
      pkg_name = pkg.split('/').slice(-1)[0].split('-')[0]
    } else {
      pkg_name = pkg
    }
    self.postMessage({type: 'status', msg: `Installing ${pkg_name}`})
    try {
      await self.pyodide.runPythonAsync(`
        import micropip
        await micropip.install('${pkg}');
      `);
    } catch(e) {
      console.log(e)
      self.postMessage({
	type: 'status',
	msg: `Error while installing ${pkg_name}`
      });
    }
  }
  console.log("Packages loaded!");
  self.postMessage({type: 'status', msg: 'Executing code'})
  const code = `
  
import asyncio

from panel.io.pyodide import init_doc, write_doc

init_doc()

import pandas as pd
import hvplot.pandas
import panel as pn
pn.extension('tabulator')


df = pd.read_csv("https://raw.githubusercontent.com/danhphan/credit-risk/main/data/interest_rates.csv")
df["date"] = pd.to_datetime(df["date"])

# Make DataFrame Pipeline Interactive
idf = df.interactive()


WIDTH = 600
country_mapping = {"US":0, "UK":1, "AU":2} 
pred_results = {}

for idx, country in enumerate(country_mapping.keys()):
    # Prediction
    print(idx, country)
    df_data = pd.read_csv(f"https://raw.githubusercontent.com/danhphan/credit-risk/main/data/prediction_{country}.csv")
    df_data['Date'] = pd.to_datetime(df_data['Date'])
    df_data = df_data.set_index("Date")
    pred_results[country] = df_data


chart_data = (idf.hvplot(x = 'date', by='country', y='rate', kind='scatter', xlabel="Date", ylabel="Observed interest rate", 
                         line_width=2, title="Interest rates by Country", width=WIDTH) *
              idf.hvplot(x = 'date', by='country', y='rate', line_width=1)
              ).opts(legend_position='top', legend_offset=(150, 0))




# Make DataFrame Pipeline Interactive
def plot(pred_results, country):
    y_iteractivate = pred_results[country].interactive()
    panel_plot = (y_iteractivate.hvplot(label="10% Quantile", alpha=0.5, x="Date", y="Q10",
                        xlabel='Date', ylabel="Predicted interest rate", width=WIDTH, title=f'Prediction for {country}') * 
                  y_iteractivate.hvplot(label="90% Quantile", x="Date", y="Q90", alpha=0.5) *
                  y_iteractivate.hvplot(label='mean', x="Date", y="Mean", color='red', line_width=3) )
    return panel_plot.opts(legend_position='top', legend_offset=(150,0))



pred_au = plot(pred_results, 'AU')
pred_us = plot(pred_results, 'US')
pred_uk = plot(pred_results, 'UK')

#Layout using Template
template = pn.template.FastListTemplate(
    title='Interest rates prediction for US, AU and UK', 
    sidebar=[pn.pane.Markdown("# Interest rates prediction"), 
             pn.pane.Markdown("#### Interest rates prediction for US, AU and UK. This project is used for technology demonstration purpose, and should not be used for the investment decision-making."), 
#              pn.pane.PNG('climate_day.png', sizing_mode='scale_both'),
             ],
    main=[pn.Row(pn.Column(chart_data.panel(width=WIDTH), margin=(0,25)), 
                 pred_au.panel(width=WIDTH)), 
          pn.Row(pn.Column(pred_us.panel(width=WIDTH), margin=(0,25)), 
                 pn.Column(pred_uk.panel(width=WIDTH)))],
    accent_base_color="#88d8b0",
    header_background="#88d8b0",
)

template.servable()


await write_doc()
  `

  try {
    const [docs_json, render_items, root_ids] = await self.pyodide.runPythonAsync(code)
    self.postMessage({
      type: 'render',
      docs_json: docs_json,
      render_items: render_items,
      root_ids: root_ids
    })
  } catch(e) {
    const traceback = `${e}`
    const tblines = traceback.split('\n')
    self.postMessage({
      type: 'status',
      msg: tblines[tblines.length-2]
    });
    throw e
  }
}

self.onmessage = async (event) => {
  const msg = event.data
  if (msg.type === 'rendered') {
    self.pyodide.runPythonAsync(`
    from panel.io.state import state
    from panel.io.pyodide import _link_docs_worker

    _link_docs_worker(state.curdoc, sendPatch, setter='js')
    `)
  } else if (msg.type === 'patch') {
    self.pyodide.runPythonAsync(`
    import json

    state.curdoc.apply_json_patch(json.loads('${msg.patch}'), setter='js')
    `)
    self.postMessage({type: 'idle'})
  } else if (msg.type === 'location') {
    self.pyodide.runPythonAsync(`
    import json
    from panel.io.state import state
    from panel.util import edit_readonly
    if state.location:
        loc_data = json.loads("""${msg.location}""")
        with edit_readonly(state.location):
            state.location.param.update({
                k: v for k, v in loc_data.items() if k in state.location.param
            })
    `)
  }
}

startApplication()