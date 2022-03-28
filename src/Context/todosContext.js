import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosContext = createContext();
export const useTodoContext = () => useContext(TodosContext);

function TodosContextProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem("todolist")) || [];
  const initialStateD = JSON.parse(localStorage.getItem("deletedlist")) || [];

  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState(initialState);
  const [deletedlist, setDeletedlist] = useState(initialStateD);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
    localStorage.setItem("deletedlist", JSON.stringify(deletedlist));
  }, [todolist, deletedlist]);

  const setDateAndTime = () => {
    let datum = new Date();
    return datum;
  };

  const addZero = (d) => {
    if (d < 10) {
      d = "0" + d;
    }
    return d;
  };

  const handleInput = (e) => {
    return setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodolist([
        ...todolist,
        {
          id: uuidv4(),
          text: input,
          completed: false,
          edited: false,
          day: addZero(setDateAndTime().getDate()),
          month: addZero(setDateAndTime().getMonth() + 1),
          year: addZero(setDateAndTime().getFullYear()),
          hours: addZero(setDateAndTime().getHours()),
          minutes: addZero(setDateAndTime().getMinutes()),
        },
      ]);
      setInput("");
    } else {
      editing(input, edit.completed, edit.id);
    }
  };

  const handleComplete = (id) => {
    setTodolist(
      todolist.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
            day: addZero(setDateAndTime().getDate()),
            month: addZero(setDateAndTime().getMonth() + 1),
            year: addZero(setDateAndTime().getFullYear()),
            hours: addZero(setDateAndTime().getHours()),
            minutes: addZero(setDateAndTime().getMinutes()),
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id, text, completed, edited) => {
    setDeletedlist([
      ...deletedlist,
      {
        id: id,
        text: text,
        completed: completed,
        edited: edited,
        day: addZero(setDateAndTime().getDate()),
        month: addZero(setDateAndTime().getMonth() + 1),
        year: addZero(setDateAndTime().getFullYear()),
        hours: addZero(setDateAndTime().getHours()),
        minutes: addZero(setDateAndTime().getMinutes()),
      },
    ]);
    return setTodolist(todolist.filter((todo) => todo.id !== id));
  };

  const handleDeleteX = (id) => {
    setDeletedlist(deletedlist.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    setEdit(todolist.find((todo) => todo.id === id));
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.text);
    } else {
      setInput("");
    }
  }, [edit, setInput]);

  const editing = (text, completed, id) => {
    setTodolist(
      todolist.map((todo) =>
        todo.id === id
          ? {
              text,
              id,
              completed,
              day: addZero(setDateAndTime().getDate()),
              month: addZero(setDateAndTime().getMonth() + 1),
              year: addZero(setDateAndTime().getFullYear()),
              hours: addZero(setDateAndTime().getHours()),
              minutes: addZero(setDateAndTime().getMinutes()),
              edited: !todo.edited,
            }
          : todo
      )
    );
    setEdit(null);
  };

  const toActive = (id, text, completed, edited) => {
    setTodolist(
      [...todolist , {
        id: id,
        text: text,
        completed: false,
        edited: false,
        day: addZero(setDateAndTime().getDate()),
        month: addZero(setDateAndTime().getMonth() + 1),
        year: addZero(setDateAndTime().getFullYear()),
        hours: addZero(setDateAndTime().getHours()),
        minutes: addZero(setDateAndTime().getMinutes()),
      }]
    )
    return handleDeleteX(id)
  }

  console.log(todolist);
  console.log(deletedlist);

  const values = {
    input,
    handleInput,
    handleSubmit,
    todolist,
    handleComplete,
    handleDelete,
    deletedlist,
    handleDeleteX,
    handleEdit,
    toActive
  };

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
}

export default TodosContextProvider;
