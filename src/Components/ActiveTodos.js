import { useTodoContext } from "../Context/todosContext";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import TodoCard from "./TodoCard";
import Empty from "./Empty";

const ActiveTodos = () => {
  const { todolist } = useTodoContext();
  return (
    <Box sx={{ minWidth: "100%", marginTop: "20px" }}>
      <Stack
        spacing={1.4}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {todolist.length !== 0 ? todolist.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              buttons={["completed", "edit", "delete"]}
              text={todo.text}
              completed={todo.completed}
              edited= {todo.edited}
              id={todo.id}
              day={todo.day}
              month={todo.month}
              year={todo.year}
              hours={todo.hours}
              minutes={todo.minutes}
            />
          );
        }): <Empty txt={['active']}/>}
      </Stack>
    </Box>
  );
};

export default ActiveTodos;
