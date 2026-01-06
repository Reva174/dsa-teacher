const Controls = ({
  input,
  setInput,
  onPrimary,
  onSecondary,
  structure,
}) => {
  return (
    <div className="controls">
      <input
        placeholder="Enter value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={onPrimary}>
        {structure === "stack" && "Push"}
        {structure === "array" && "Add"}
        {structure === "queue" && "Enqueue"}
      </button>

      {structure !== "array" && (
        <button onClick={onSecondary}>
          {structure === "stack" ? "Pop" : "Dequeue"}
        </button>
      )}
    </div>
  );
};

export default Controls;
