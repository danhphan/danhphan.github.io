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


## Machine Learning

### Multi-output Gaussian Processes in PyMC 

Multi-output Gaussian processes (MOGPs) have recently become an active research topic in machine learning’s multi-task learning. The advantage of multi-output GPs is its capacity to simultaneously learn and infer many outputs which have the same source of uncertainty from inputs. 

This project aims to add support for multi-output GPs in [PyMC](https://docs.pymc.io/en/stable/api/gp.html). This feature would significantly extend the capabilities of this important module, and benefit the [PyMC community](https://discourse.pymc.io/).

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/danhphan/gp_experiments)

<center><img src="../assets/projects/pymc_mogp.JPG"/></center>

---

### Aussie Social Sentiment Analysis

This project collects data from Twitter’s APIs, then cleans and stores in a sql database. The data is then used for model training and prediction of sentiment analysis for other tweets. The webapp uses Dash visualisations and is deployed on Herokuapp.

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/danhphan/aussie-sentiment)
[![View Demo](https://img.shields.io/badge/%E2%86%91_Deploy_to-Heroku-7056bf.svg?style=flat)](https://aussie-sentiments.herokuapp.com)

<center><img src="../assets/projects/aussie_sentiment_analysis.gif"/></center>

---

### Customers persona clustering

This project aims to identify the critical groups of users for Domain Group. Customers are categorised into different segmentations, and then these groups are map with existing Personas defined by the Marketing team.

The Google Analytics dataset has more than billion rows and hundred columns. SQL and Python packages (Pandas, ScikitLearn, ...) are used for data processing and building models.

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/danhphan/Statistical-Learning)

<center><img src="../assets/projects/domain_customer_clusters.jpg"/></center>

---

## MLOps

### Building Docker images for PyMC

I have built a docker file for PyMC v4, which support both GPUs and CPUs version. The dockerfile has been merged into PyMC project's code base in this [PR](https://github.com/pymc-devs/pymc/pull/5881).

The docker image is then published on [Docker Hub](https://hub.docker.com/r/pymc/pymc/tags), so users can easily pull the image and set up their environment.

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/danhphan/pymc-docker)

<center><img src="../assets/projects/pymc_docker.JPG"/></center>

---

## Data Science

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