import { createContext } from "react";

interface TodoItem {
  input: string;
  complete: boolean;
}

export const TodoContext = createContext<TodoItem[]>([]);
