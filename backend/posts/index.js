const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
console.log({posts})

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = uuidv4();
  const { title } = req.body;
  
  posts[id] = {
    id,
    title,
  };
  
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000 💻");
});
