import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const ListComment = ({ comments }) => {
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
