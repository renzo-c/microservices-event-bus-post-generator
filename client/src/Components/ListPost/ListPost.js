import React from "react";
import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CreateComment from "../CreateComment";

const ListPost = () => {
  const list = [
    { post: "loren ipsum 1", comments: [{ comment: "blab lbad 1" }] },
    { post: "loren ipsum 2", comments: [{ comment: "blab lbad 2" }] },
    { post: "loren ipsum 3", comments: [{ comment: "blab lbad 3" }] },
  ];
  return (
    <div style={{ paddingTop: "1%" }}>
      <Grid
        container
        spacing={1}
        fullWidth
        sx={{ marginTop: 0, marginLeft: 0 }}
      >
        {list.map((item) => {
          return (
            <Grid item direction="column" spacing={2} sx={{ maxWidth: 400 }}>
              <Paper elevation={1} sx={{ padding: "15px" }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography as="span" fullWidth sx={{ fontWeight: 700 }}>
                      Post:
                    </Typography>
                    <Typography as="span" variant="h7" fullWidth>
                      {item.post}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography as="div" fullWidth sx={{ fontWeight: 700 }}>
                      Comments:
                    </Typography>
                    <List>
                      {item.comments.map((comment) => {
                        return (
                          <ListItem>
                            <ListItemText> 👉 {comment.comment}</ListItemText>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Grid>
                  <CreateComment />
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ListPost;
