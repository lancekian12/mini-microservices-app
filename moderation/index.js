const express = require("express");
const cors = require("cors");
const bodyParser = require("bodyParser");
const axios = require('axios')

const app = express();

app.use(bodyParser());
app.use(cors());

app.post("/events", (req, res) => {});

app.listen("4003", () => {
  console.log("Listening to 4003");
});
