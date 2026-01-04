interface TodoCardProps {
  input: string;
  complete: boolean;
  index: number;
  handleDeleteTodo: (removedIndex: number) => void;
}

export function TodoCard({
  input,
  complete,
  index,
  handleDeleteTodo,
}: TodoCardProps) {
  return (
    <div className="card todo-item">
      <p>{input}</p>
      <div>
        <button disabled={complete}>
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
