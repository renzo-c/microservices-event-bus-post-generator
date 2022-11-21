import React, { useState } from "react";
import { Paper, Grid, TextField, Button } from "@mui/material";

const Posts = () => {
  const [post, setPost] = useState("");

  const handleCreate = () => {
    console.log("Create");
  };

  return (
    <Paper elevation={1} fullWidth sx={{ padding: "1%" }}>
      <Grid container direction="column" spacing={2} sx={{ maxWidth: 500 }}>
        <Grid item>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Post"
            variant="outlined"
            value={post}
            onChange={(e) => setPost(e.target.value)}
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

export default Posts;
