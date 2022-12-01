import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const ListComment = ({ comments }) => {
  return (
    <List>
      {comments.map((comment, idx) => {
        let content;

        if (comment.status === "approved") {
          content = comment.content;
        }

        if (comment.status === "pending") {
          content = "This comment is awaiting moderation";
        }

        if (comment.status === "rejected") {
          content = "This comment has been rejected";
        }
        return (
          <ListItem key={idx}>
            <ListItemText> 👉 {content}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListComment;
