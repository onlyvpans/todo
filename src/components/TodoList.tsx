import { TodoCard } from "./TodoCard";
import { TodoContext } from "../contexts/TodoContext";
import { useContext } from "react";

interface todoListProp {
  handleDeleteTodo: (removedIndex: number) => void;
}
export function TodoList({ handleDeleteTodo }: todoListProp) {
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
        return (
          <TodoCard
            handleDeleteTodo={handleDeleteTodo}
            index={todoIndex}
            key={todoIndex}
            {...todo}
          ></TodoCard>
        );
      })}
    </>
  );
}
