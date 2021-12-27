const express = require("express");
const port = "3000";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Server online</h1>");
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
