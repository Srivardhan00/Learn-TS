import {
  Checkbox,
  Typography,
  Button,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useState } from "react";
import { Close, Done } from "@mui/icons-material";

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: TodoItemType["id"]) => void;
  editHandler: (id: TodoItemType["id"], title: TodoItemType["title"]) => void;
};

const TodoItem = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [title, setTitle] = useState<TodoItemType["title"]>(todo.title);

  return (
    <Paper sx={{ padding: "25px 10px", textAlign: "center" }} elevation={6}>
      <Stack direction={"row"} alignItems={"center"} gap={"1px"}>
        {editActive ? (
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && title.trim() !== "") {
                editHandler(todo.id, title);
                setEditActive(false);
              }
            }}
          />
        ) : (
          <Typography marginRight={"auto"} fontWeight={"700"}>
            {todo.title}
          </Typography>
        )}

        <Checkbox
          checked={todo.isDone}
          onChange={() => completeHandler(todo.id)}
        />

        {editActive ? (
          <Button
            onClick={() => {
              if (title.trim() !== "") {
                editHandler(todo.id, title);
                setEditActive(false);
              }
            }}
          >
            <Done />
          </Button>
        ) : (
          <Button
            color="secondary"
            onClick={() => setEditActive((prev) => !prev)}
          >
            <ModeEditOutlineIcon />
          </Button>
        )}

        <Button color="warning" onClick={() => deleteHandler(todo.id)}>
          <DeleteForeverIcon style={{ color: "#858585" }} />
        </Button>

        {editActive && (
          <Button
            onClick={() => {
              setTitle(todo.title);
              setEditActive(false);
            }}
          >
            <Close color="error" />
          </Button>
        )}
      </Stack>
    </Paper>
  );
};

export default TodoItem;
