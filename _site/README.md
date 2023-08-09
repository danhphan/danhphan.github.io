### https://danhphan.net

This is the personal webpage of Danh Phan.




### How to set up the website


**Install Jekyll on Ubuntu**

https://jekyllrb.com/docs/installation/ubuntu/

https://jekyllrb.com/docs/


```
sudo apt-get install ruby-full build-essential zlib1g-dev

echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

gem install jekyll bundler
```



**Run Jekyll on Ubuntu**

https://mmistakes.github.io/minimal-mistakes/docs/installation/

```
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```