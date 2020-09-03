import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, TextField } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodods] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setTodods([...todos, input]);
    setInput("");
  };

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodods(
          snapshot.docs.map((doc) => ({
            todo: doc.data().todo,
            id: doc.id,
          }))
        );
      });
  }, []);

  return (
    <div className="App">
      <h1>
        Hello world{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      <form>
        <TextField
          label="enter todo"
          variant="outlined"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
