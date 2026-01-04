interface TodoCardProps {
  input: string;
  complete: boolean;
  index: number;
  handleDeleteTodo: (removedIndex: number) => void;
  handleMarkCompleted: (completedIndex: number) => void;
}

export function TodoCard({
  input,
  complete,
  index,
  handleDeleteTodo,
  handleMarkCompleted,
}: TodoCardProps) {
  // if done is pressed, then handleMarkComplete should run
  // setState[] of complete: true

  return (
    <div className="card todo-item">
      <p>{input}</p>
      <div>
        {!complete && (
          <button
            disabled={complete}
            onClick={() => {
              handleMarkCompleted(index);
            }}
          >
            <h6>Done</h6>
          </button>
        )}
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
