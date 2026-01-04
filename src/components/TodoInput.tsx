import { useState } from "react";

interface handleToDoProp {
  handleAddTodo: (newTodo: string) => void;
}
export function TodoInput({ handleAddTodo }: handleToDoProp) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          if (inputValue) {
            handleAddTodo(inputValue);
            setInputValue("");
          }
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
