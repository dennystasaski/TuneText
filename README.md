[![Build Status](https://travis-ci.com/dennystasaski/TuneText.svg?branch=master)](https://travis-ci.com/dennystasaski/TuneText)

# TuneText
Welcome to TuneText!  TuneText is a website to pair a song to a user's provided text.  Using machine learning NLTK models, text can be classified into an emotion.  The text will then be paired with a fitting song!

## Setup
This website makes use of Google Cloud's text-to-speech API.  To connect, put your Google Cloud account's API key into a file `api.env` at the project root directory.

## Running the Application
Start the website easily on your local machine with `docker-compose up`

The website can be viewed at `localhost:4200`

## Credits
Training dataset used from `CrowdFlower.com`.  The dataset consists of 40,000 tweets labeled with emotion.

All songs used are under CC0 license from `freepd.com`, `soundcloud.com`.
