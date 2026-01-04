import { TodoCard } from "./TodoCard";
import { TodoContext } from "../contexts/TodoContext";
import { useContext } from "react";

type tabEnum = "All" | "Open" | "Completed";

interface TodoListProp {
  handleDeleteTodo: (removedIndex: number) => void;
  selectedTab: tabEnum;
}

export function TodoList({ handleDeleteTodo, selectedTab }: TodoListProp) {
  const todos = useContext(TodoContext);

  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Open"
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
