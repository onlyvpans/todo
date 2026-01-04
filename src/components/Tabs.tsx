import { useContext, type SetStateAction } from "react";
import { TodoContext } from "../contexts/TodoContext";

type tabEnum = "All" | "Open" | "Completed";

interface Tabs {
  selectedTab: tabEnum;
  setSelectedTab: React.Dispatch<SetStateAction<tabEnum>>;
}

export function Tabs({ selectedTab, setSelectedTab }: Tabs) {
  const todos = useContext(TodoContext);
  const tabs: tabEnum[] = ["All", "Open", "Completed"];

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
          <button
            className={
              tab === selectedTab ? "tab-button tab-selected" : "tab-button"
            }
            key={tabIndex}
            value={tab}
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            {tab} <span>{numOfTasks}</span>
          </button>
        );
      })}
    </nav>
  );
}
