import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";

const CreateComment = ({postId}) => {
  const [comment, setComment] = useState({content: ''});

  const handleCreate = () => {
    axios.post(`http://localhost:4001/posts/${postId}/comments`, comment);
  };

  return (
    <Grid item container>
      <Grid item sx={{width: '100%'}}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Comment"
          variant="outlined"
          value={comment.content}
          onChange={(e) => setComment({...comment, content: e.target.value})}
          sx={{ margin: "12px 0 12px 0"}}
          size="small"
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={handleCreate}
          sx={{ maxWidth: 150, fontSize: "12px" }}
        >
          Create Comment
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateComment;
