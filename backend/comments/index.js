const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};
// console.log({commentsByPostId})

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  console.log("this is a post req")
  const commentId = uuidv4();
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
console.log({comments})
  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;
  console.log({commentsByPostId})
  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("Listening on port 4001 💻");
});
