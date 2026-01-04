import { TodoCard } from "./TodoCard";
import { TodoContext } from "../contexts/TodoContext";
import { useContext } from "react";

type tabEnum = "All" | "Open" | "Completed";

// chuck in useContext
interface TodoListProp {
  handleDeleteTodo: (removedIndex: number) => void;
  handleMarkCompleted: (completedIndex: number) => void;
  selectedTab: tabEnum;
}

export function TodoList({
  handleDeleteTodo,
  selectedTab,
  handleMarkCompleted,
}: TodoListProp) {
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
            handleMarkCompleted={handleMarkCompleted}
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
