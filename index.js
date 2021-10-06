const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Iniciando container docker!");
});

app.get("/produtos", (req, res) => {
  res.send("Lista de produtos");
});

app.listen(3000);
