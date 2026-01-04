import Header from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { TodoContext } from "./contexts/TodoContext";

export default function App() {
  const todos = [
    { input: "Get a dog", complete: true },
    { input: "Name the dog", complete: true },
    { input: "Feed Toastie", complete: true },
    { input: "Pet Toastie", complete: true },
  ];

  return (
    <>
      <TodoContext.Provider value={todos}>
        <Header />
        <Tabs />
        <TodoList />
        <TodoInput />
      </TodoContext.Provider>
    </>
  );
}
