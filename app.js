const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server ready");
});

app.get("/name", (req, res) => {
  const data = {
    name: "sevval",
  };
  res.json(data);
});
