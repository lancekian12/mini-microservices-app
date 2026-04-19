const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
const posts = {};

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  res.send(posts);
});


app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  if (!title) {
    return res.status(400).send({ error: "Title is required" });
  }
  if (title) {
    posts[id] = { id, title };

    res.status(201).send(posts[id]);
  }
});

app.listen(4000, () => {
  console.log("Listening in 4000");
});
