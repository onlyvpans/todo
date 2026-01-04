import Header from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { TodoContext } from "./contexts/TodoContext";
import { useState } from "react";

export default function App() {
  type tabEnum = "All" | "Open" | "Completed";

  const [selectedTab, setSelectedTab] = useState<tabEnum>("All");
  interface TodoInterface {
    input: string;
    complete: boolean;
  }

  const [todos, setTodos] = useState<TodoInterface[]>([]);

  function handleAddTodo(newTodo: string) {
    const newTodolist = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodolist);
  }

  function handleDeleteTodo(removedIndex: number) {
    const newTodoList = todos.filter((_, i) => i !== removedIndex);

    setTodos(newTodoList);
  }

  return (
    <>
      <TodoContext.Provider value={todos}>
        <Header />
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <TodoList
          handleDeleteTodo={handleDeleteTodo}
          selectedTab={selectedTab}
        />
        {selectedTab === "All" ||
          (selectedTab === "Open" && (
            <TodoInput handleAddTodo={handleAddTodo} />
          ))}
      </TodoContext.Provider>
    </>
  );
}
