const serverless = require("serverless-http");
const express = require("express");
const app = express();
const { createClient } = require("pexels");

const client = createClient(process.env.API_KEY);

app.get("/search", (req, res) => {
  const { per_page, query, page } = req.query;

  return client.photos
    .search({
      per_page: Number(per_page),
      query: String(query),
      page: Number(page),
    })
    .then((result) => res.status(200).json(result));
});

app.get("/curated", (req, res) => {
  const { per_page, page } = req.query;

  return client.photos
    .curated({
      per_page: Number(per_page),
      page: Number(page),
    })
    .then((result) => res.status(200).json(result));
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
