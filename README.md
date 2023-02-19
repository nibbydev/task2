# Body parser

## Description

Simple ExpressJS app to demonstrate usage of body-parsing middleware similar to `app.use(express.json())`.

## Running

The app was developed with NodeJS 18.14.1 LTS and 9.3.1 NPM

1. Run `npm i` to install packages
2. Run the app with `npm start`

# Usage

Sending a POST request with valid JSON body to http://localhost:3000/api/v1/bodyparser-middleware will return status code 200 with response `OK`.

Sending a request with an empty body, will return status code 200 with response `No body`.

Sending a request with invalid JSON body, however, will return status code 400 with response `Hold your horses, partner!`.
