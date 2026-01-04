interface TodoCardProps {
  input: string;
  complete: boolean;
}

export function TodoCard({ input, complete }: TodoCardProps) {
  return (
    <div className="card todo-item">
      <p>{input}</p>
      <div>
        <button disabled={complete}>
          <h6>Done</h6>
        </button>
        <button>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
