import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import TodoCard from "./TodoCard";
import { useTodoContext } from "../Context/todosContext";
import Empty from "./Empty";

const DeletedTodos = () => {
  const { deletedlist } = useTodoContext();
  return (
    <Box sx={{ minWidth: "100%", marginTop: "20px" }}>
      <Stack
        spacing={1.4}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {deletedlist.length !== 0 ? (
          deletedlist.map((todo) => {
            return (
              <TodoCard
                key={todo.id}
                text={todo.text}
                id={todo.id}
                completed={todo.completed}
                edited={todo.edited}
                day={todo.day}
                month={todo.month}
                year={todo.year}
                hours={todo.hours}
                minutes={todo.minutes}
                buttons={["toActive", "deleteX"]}
              />
            );
          })
        ) : (
          <Empty txt={["deleted"]} />
        )}
      </Stack>
    </Box>
  );
};

export default DeletedTodos;
