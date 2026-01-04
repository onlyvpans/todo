import { createContext } from "react";

interface todoItem {
  input: string;
  complete: boolean;
}

export const TodoContext = createContext<todoItem[]>([]);
