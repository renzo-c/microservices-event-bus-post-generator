import React, { useState } from "react";
import { Paper, Grid, TextField, Button } from "@mui/material";
import axios from "axios";

const CreatePost = () => {
  const [post, setPost] = useState({ title: "" });

  const handleCreate = () => {
    axios.post("http://localhost:4000/posts", post);
    setPost({ title: "" });
  };

  return (
    <Paper elevation={1} sx={{ padding: "1%" }}>
      <Grid container direction="column" spacing={2} sx={{ maxWidth: 500 }}>
        <Grid item>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Post"
            variant="outlined"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={handleCreate}
            sx={{ maxWidth: 150 }}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreatePost;
