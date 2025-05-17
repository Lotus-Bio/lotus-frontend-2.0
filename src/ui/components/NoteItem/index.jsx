export default function NoteItem({ id, label, completed, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#f0f0f0",
        borderRadius: "0.5rem",
        padding: "1rem",
        cursor: "pointer",
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      <span>{label}</span>
      {completed ? "✅" : "⬜"}
    </div>
  );
}
