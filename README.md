# sanity-plugin-asset-source-pexels-api-proxy

This serverless app provides proxy API for [sanity-plugin-asset-source-pexels](https://github.com/dorelljames/sanity-plugin-asset-source-pexels)

It's a pretty basic Express app hosted and deployed in AWS via serverless framework.

## Running locally

1. Clone this repo
2. Create an `.env` file and add `API_KEY` with your Pexels API
3. Use `yarn install` to install dependencies.
4. Then run `yarn start` to run the app.

All requests will be on `http://localhost:9000` with two endpoints: `/curated` and `/search`.
