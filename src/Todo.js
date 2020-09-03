import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Button,
} from "@material-ui/core";

import "./Todo.css";
import db from "./firebase";

function Todo({ todo }) {
  function deleteTodo() {
    db.collection("todos").doc(todo.id).delete();
  }
  return (
    <ListItem alignItems="center" className="todo_list">
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
        />
      </ListItemAvatar>
      <ListItemText
        primary={todo.todo}
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body2" color="textPrimary">
              Description for the todo
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
      <Button color="secondary" variant="contained" onClick={deleteTodo}>
        Delete
      </Button>
    </ListItem>
    // <div>
    //   <li>{todo}</li>
    // </div>
  );
}

export default Todo;
