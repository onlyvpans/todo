import Header from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { TodoContext } from "./contexts/TodoContext";
import { useState, useEffect } from "react";

export default function App() {
  type tabEnum = "All" | "Open" | "Completed";
  const [selectedTab, setSelectedTab] = useState<tabEnum>("All");

  interface TodoInterface {
    input: string;
    complete: boolean;
  }

  const [todos, setTodos] = useState<TodoInterface[]>([]);

  function handleMarkCompleted(completedIndex: number) {
    const newTodoList = todos.map((todo, i) =>
      i === completedIndex ? { ...todo, complete: true } : todo
    );
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleAddTodo(newTodo: string) {
    const newTodolist = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodolist);

    handleSaveData(newTodolist);
  }

  function handleDeleteTodo(removedIndex: number) {
    const newTodoList = todos.filter((_, i) => i !== removedIndex);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos: TodoInterface[]) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }

    const storedData = localStorage.getItem("todo-app");
    if (!storedData) {
      return;
    }

    const db: { todos: TodoInterface[] } | null = JSON.parse(storedData);
    setTimeout(() => {
      setTodos(db!.todos);
    }, 0);
  }, []);

  return (
    <>
      <TodoContext.Provider value={todos}>
        <Header />
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <TodoList
          handleDeleteTodo={handleDeleteTodo}
          handleMarkCompleted={handleMarkCompleted}
          selectedTab={selectedTab}
        />
        {(selectedTab === "All" || selectedTab === "Open") && (
          <TodoInput handleAddTodo={handleAddTodo} />
        )}
      </TodoContext.Provider>
    </>
  );
}
