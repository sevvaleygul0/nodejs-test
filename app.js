const request = require("supertest");

const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server ready");
});

app.get("/name", (req, res) => {
  const data = {
    name: "sevval",
  };
  res.status(200).json(data);
});

request(app)
  .get("/name")
  .expect("Content-Type", /json/)
  .expect("Content-Length", "17")
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
  });
