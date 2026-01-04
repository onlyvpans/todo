import { TodoCard } from "./TodoCard";
import { TodoContext } from "../contexts/TodoContext";
import { useContext } from "react";

export function TodoList() {
  // const [todolist, setTodoList] = useState([]);

  const todos = useContext(TodoContext);

  const tab = "All";

  const filterTodosList =
    tab === "All"
      ? todos
      : tab === "open"
      ? todos.filter((val) => !val.complete)
      : todos.filter((val) => val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} {...todo}></TodoCard>;
      })}
    </>
  );
}
