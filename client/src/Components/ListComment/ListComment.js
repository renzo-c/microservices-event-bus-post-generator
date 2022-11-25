import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";

const ListComment = ({ postId }) => {
  const [comments, setComments] = useState([]);
console.log({comments})
  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <List>
      {comments.map((comment, idx) => {
        return (
          <ListItem key={idx}>
            <ListItemText> 👉 {comment.content}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListComment;
