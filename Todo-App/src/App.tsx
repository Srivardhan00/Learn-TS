import { AppBar, Button, Container, Stack, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([{id:"2", title:"hi", isDone:true}]);
  return (
    <div>
      <Container maxWidth="sm" sx={{height:"95vh"}}>
        <AppBar position="static">
          <Toolbar>
            <Typography>To-Do</Typography>
          </Toolbar>
        </AppBar>
        <Stack height={"80%"} direction={"column"}  spacing={"1rem"} p={"1rem"}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </Stack>
        <TextField fullWidth label="New Todo"/>
        <Button fullWidth sx={{margin:"20px 0"}} variant="contained">Add</Button>
      </Container>
    </div>
  );
};

export default App;
