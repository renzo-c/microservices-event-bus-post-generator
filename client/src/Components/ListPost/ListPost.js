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
import ListComment from "../ListComment/ListComment";
import axios from "axios";

const ListPost = () => {
  const [listPosts, setListPosts] = useState({});
console.log({listPosts})

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setListPosts(res);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ paddingTop: "1%" }}>
      <Grid container spacing={1} sx={{ marginTop: 0, marginLeft: 0 }}>
        {Object.entries(listPosts).map(([id, post], idx) => {
          return (
            <Grid key={idx} item sx={{ maxWidth: 400 }}>
              <Paper elevation={1} sx={{ padding: "15px" }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography as="span" sx={{ fontWeight: 700 }}>
                      Post:
                    </Typography>
                    <Typography as="span" variant="h7">
                      {post.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography as="div" sx={{ fontWeight: 700 }}>
                      Comments:
                    </Typography>
                    <ListComment postId={post.id} />
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
