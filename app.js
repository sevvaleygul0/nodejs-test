const request = require("supertest");
const express = require("express");
/* 
  local imports
*/
const jsonData = require("./constants");

const app = express();

app.listen(3000, () => {
  console.log("Server ready");
});

app.get("/name", (req, res) => {
  res.status(200).json(jsonData);
});

request(app)
  .get("/name")
  .expect("Content-Type", /json/)
  .expect("Content-Length", "17")
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
  });
