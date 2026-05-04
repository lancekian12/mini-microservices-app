const express = require("express");
const cors = require("cors");
const bodyParser = require("bodyParser");
const axios = require('axios')

const app = express();

app.use(bodyParser());
app.use(cors());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  if (type === 'CommentCreated') {
    const status = data.content.includes('orage') ? 'rejected' : 'approved';
  }
  await axios.post('http://localhost:4005/events', {
    type: 'CommentModerated',
    data: {
      id: data.id,
      postId: data.postId,
      status,
      content: data.content
    }
  }).catch((err) => {
    console.log(err.message)
  })
  res.send({})
});

app.listen("4003", () => {
  console.log("Listening to 4003");
});
