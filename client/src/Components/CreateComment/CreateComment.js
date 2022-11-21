import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

const CreateComment = () => {
  const [comment, setComment] = useState("");

  const handleCreate = () => {
    console.log("Create comment");
  };

  return (
    <Grid item container fullWidth>
      <Grid item sx={{width: '100%'}}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Comment"
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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
