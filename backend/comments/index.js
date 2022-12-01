const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};
// console.log({commentsByPostId})

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = uuidv4();
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  const status = "pending";

  comments.push({ id: commentId, content, status });

  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
      status,
    },
  });
  res.status(201).send(comments);
});

app.post("/events", async (req, res) => {
  console.log("Event received", req.body.type);
  const { type, data } = req.body;

  if (type === "CommentModerated") {
    const { postId, id, status, content } = data;
    const comments = commentsByPostId[postId];

    const comment = comments.find((comment) => (comment.id === id));
    comment.status = status;

    await axios.post("http://localhost:4005/events", {
      type: "CommentUpdated",
      data: {
        id,
        postId,
        status,
        content,
      },
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on port 4001 💻");
});
