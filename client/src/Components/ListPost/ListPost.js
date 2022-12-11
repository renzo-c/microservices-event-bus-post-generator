import React, { useState, useEffect } from "react";
import { Paper, Grid, Typography } from "@mui/material";
import CreateComment from "../CreateComment";
import ListComment from "../ListComment/ListComment";
import axios from "axios";

const ListPost = () => {
  const [listPosts, setListPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");
    setListPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ paddingTop: "1%" }}>
      <Grid container spacing={1} sx={{ marginTop: 0, marginLeft: 0 }}>
        {Object.entries(listPosts).map(([id, post]) => {
          return (
            <Grid key={id} item sx={{ maxWidth: 400 }}>
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
                    <ListComment comments={post.comments} />
                  </Grid>
                  <CreateComment postId={post.id} />
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
