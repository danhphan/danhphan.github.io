---
permalink: /projects/
author_profile: true
excerpt: ''
header:
  overlay_image: assets/images/header-background.jpg
sidebar:
  - title: ""
    text: ""
entries_layout: grid
toc: true
toc_label: "List of my projects"
toc_icon: "heart"  # corresponding Font Awesome icon name (without fa prefix)
---

Recent projects:


## I. Machine Learning

### Interest rates predictions 

This project aims to predict the base interest rates in Australia, US, and UK in the coming months. I demonstrate a complete cycle in Machine Learning and Data Engineering project, including an ETL process to collect and transform data from different data sources. The data is then stored in Azure Storage and is used for model development. The model is then deployed and served as a web service, which pushes the prediction results onto a Github page for visualization.


[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/danhphan/credit-risk)

[Project dashboard](https://danhphan.net/apps/interest-rate.html)
<center><img src="../assets/projects/predicted_interest_rates.png"/></center>


*Data pipelines and architecture*

<center><img src="../assets/projects/ir_architecture_v1.jpg"/></center>



---

### Modelling baseball players's performance

This work is supported by Google Summer of Code [project](https://summerofcode.withgoogle.com/programs/2022/projects/lKwZ8APE), which adds support for Multi-output Gaussian processes in [PyMC](https://www.pymc.io/blog/blog_gsoc_2022.html#danh-phan). 

We model the performances of different sport players by leveraging Multi-output Gaussian processes (MOGPs), which can simultaneously learn and infer many outputs with the same source of uncertainty. The following picture shows the estimated sprin rates of three top pitchers in different game dates. Please check the [PyMC example](https://www.pymc.io/projects/examples/en/latest/gaussian_processes/MOGP-Coregion-Hadamard.html) for further details.

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/danhphan/gp_experiments) [![View on PyMC](https://img.shields.io/badge/PyMC-View%20on%20PyMC%20Documentation-brightgreen)](https://www.pymc.io/projects/examples/en/latest/gaussian_processes/MOGP-Coregion-Hadamard.html)

<center><img src="../assets/projects/pitchers_performance.jpg"/></center>

---

### Aussie Social Sentiment Analysis

This project collects data from Twitter’s APIs, then cleans and stores in a sql database. The data is then used for model training and prediction of sentiment analysis for other tweets. The webapp uses Dash visualisations and is deployed on Herokuapp.

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/danhphan/aussie-sentiment)
[![View Demo](https://img.shields.io/badge/%E2%86%91_Deploy_to-Heroku-7056bf.svg?style=flat)](https://aussie-sentiments.herokuapp.com)

<center><img src="../assets/projects/aussie_sentiment_analysis.gif"/></center>

---


## II. MLOps & Data Engineering

### Accelerating testing CI pipelines

Continuous Integration - Continuous Development (CI/CD) plays an essential role in MLOps and DataOps. One of the popular CI/CD tools is GitHub Actions. To enhance CI/CD pipelines, we can use the matrix strategy in GitHub Actions to run parallel tasks. 

For example, I have recently leveraged the `strategy.matrix` feature to significantly accelerate the testing CI pipelines for [PyTensor](https://github.com/pymc-devs/pytensor) from 75 mins to around 26 mins (**a 65% reduction** in running time). Please check this [pull request](https://github.com/pymc-devs/pytensor/pull/176) for further details.

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/pymc-devs/pytensor/pull/176)

<center><img src="../assets/projects/testing_CI.jpg"/></center>

---

### Building Docker images for PyMC

I have built a docker file for PyMC v4, which support both GPUs and CPUs version. The dockerfile has been merged into PyMC project's code base in this [pull request](https://github.com/pymc-devs/pymc/pull/5881).

The docker image is then published on [Docker Hub](https://hub.docker.com/r/pymc/pymc/tags), so users can easily pull the image and set up their environment.

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/danhphan/pymc-docker)

<center><img src="../assets/projects/pymc_docker.JPG"/></center>

---

## III. Data Science

### Data Visualisation: Melbournian Daily Activities

This project visualises the daily activities of Melbournians in different areas.

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/danhphan/melburnian-daily-activities)
[![View Demo](https://img.shields.io/badge/%E2%86%91_Deploy_to-Heroku-7056bf.svg?style=flat)](https://melbourn-city.herokuapp.com/static/activities.html)

<center><img src="../assets/projects/Melbourne_activities_1min.gif"/></center>

---

### Domain Scenery Views - Telegram Bot

A Telegram bot in Python, which will automatically push the top listings into the Domain channel on Telegram each day. The top listings show properties with the most beautiful views like beaches, lakes, and city views in Australia cities. Customers can join Domain Scenery Views channel on Telegram to receive the news.

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/danhphan/Statistical-Learning)

<center><img src="../assets/projects/domain_tegegram_bot.jpg"/></center>

---

For more projects, please check my [github@danhphan](https://github.com/danhphan).