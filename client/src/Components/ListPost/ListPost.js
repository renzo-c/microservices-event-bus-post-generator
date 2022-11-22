import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CreateComment from "../CreateComment";
import axios from "axios";

const ListPost = () => {
  const [listPostsx, setListPostsx] = useState({});

  const listPosts = [
    { title: "loren ipsum 1", comments: [{ content: "blab lbad 1" }] },
    { title: "loren ipsum 2", comments: [{ content: "blab lbad 2" }] },
    { title: "loren ipsum 3", comments: [{ content: "blab lbad 3" }] },
  ];

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setListPostsx(res);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ paddingTop: "1%" }}>
      <Grid container spacing={1} sx={{ marginTop: 0, marginLeft: 0 }}>
        {Object.entries(listPosts).map((item, idx) => {
          return (
            <Grid key={idx} item sx={{ maxWidth: 400 }}>
              <Paper elevation={1} sx={{ padding: "15px" }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography as="span" sx={{ fontWeight: 700 }}>
                      Post:
                    </Typography>
                    <Typography as="span" variant="h7">
                      {item[1].title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography as="div" sx={{ fontWeight: 700 }}>
                      Comments:
                    </Typography>
                    <List>
                      {item[1].comments.map((comment, idx) => {
                        return (
                          <ListItem key={idx}>
                            <ListItemText> 👉 {comment.content}</ListItemText>
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
