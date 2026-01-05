import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function Header() {
  const todos = useContext(TodoContext);

  const todosLength = todos.filter((todo) => todo.complete === false).length;
  const isTaskPlural = todosLength != 1;

  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open task{isTaskPlural ? "s" : null}
      </h1>
    </header>
  );
}
