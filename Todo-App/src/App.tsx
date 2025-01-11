import {
  AppBar,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      title: title.trim(),
      isDone: false,
      id: String(Math.random() * 1000),
    };
    setTodos((old) => [...old, newTodo]);
    setTitle("");
  };

  const completeHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item;
    });
    setTodos(newTodos);
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const editHandler = (
    id: TodoItemType["id"],
    title: TodoItemType["title"]
  ): void => {
    const newTodos: TodoItemType[] = todos.map((item) => {
      return item.id === id ? { ...item, title: title.trim() } : item;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <Container maxWidth="sm" sx={{ height: "95vh" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography>To-Do</Typography>
          </Toolbar>
        </AppBar>

        <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
          {todos.map((todo) => (
            <TodoItem
              completeHandler={completeHandler}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
              key={todo.id}
              todo={todo}
            />
          ))}
        </Stack>

        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          label="New Todo"
          onKeyDown={(e) => {
            // functionality to add on Enter
            if (e.key === "Enter" && title.trim() !== "") {
              submitHandler();
            }
          }}
        />

        <Button
          fullWidth
          sx={{ margin: "20px 0" }}
          variant="contained"
          onClick={submitHandler}
          disabled={title.trim() === ""} // valid check
        >
          Add
        </Button>
      </Container>
    </div>
  );
};

export default App;
