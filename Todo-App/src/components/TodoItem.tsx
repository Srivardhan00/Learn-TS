import { Checkbox,  Typography, Button, Paper, Stack } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

type PropsType={
    todo:TodoItemType;
}

const TodoItem = ({todo}: PropsType) => {
  return (
    <Paper sx={{padding:"25px 10px", textAlign:"center"}}  elevation={6}>
        <Stack direction={"row"} alignItems={"center"} gap={"1px"}>
        <Typography marginRight={"auto"} fontWeight={"700"}>
            {todo.title}
        </Typography>
        <Checkbox/>
        <Button color="secondary"><ModeEditOutlineIcon/></Button>
        <Button color="warning"><DeleteForeverIcon/></Button>
        </Stack>
    </Paper>
  )
}

export default TodoItem
