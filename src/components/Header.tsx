import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
// interface TodoItem {
//   input: string;
//   complete: boolean;
// }

// interface headerProps {
//   todos: TodoItem[];
// }

export default function Header() {
  const todos = useContext(TodoContext);

  const todosLength = todos.length;
  const isTaskPlural = todosLength != 1;
  // const [length, setLength] = useState(0);

  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open task{isTaskPlural ? "s" : null}
      </h1>
    </header>
  );
}
