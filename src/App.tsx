import Header from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { TodoContext } from "./contexts/TodoContext";
import { useState } from "react";

export default function App() {
  interface todoInterface {
    input: string;
    complete: boolean;
  }

  const [todos, setTodos] = useState<todoInterface[]>([]);

  function handleAddTodo(newTodo: string) {
    const newTodolist = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodolist);
  }

  function handleDeleteTodo(removedIndex: number) {
    const newTodoList = todos.filter((_, i) => i !== removedIndex);

    setTodos(newTodoList);
  }

  // function handleEditTodo() {}

  return (
    <>
      <TodoContext.Provider value={todos}>
        <Header />
        <Tabs />
        <TodoList handleDeleteTodo={handleDeleteTodo} />
        <TodoInput handleAddTodo={handleAddTodo} />
      </TodoContext.Provider>
    </>
  );
}
