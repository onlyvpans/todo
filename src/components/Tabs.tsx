import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export function Tabs() {
  const todos = useContext(TodoContext);

  const tabs = ["All", "Open", "Completed"];
  console.log(todos);

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;

        return (
          <button className="tab-button" key={tabIndex}>
            {tab} <span>{numOfTasks}</span>
          </button>
        );
      })}
    </nav>
  );
}
