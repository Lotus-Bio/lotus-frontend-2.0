export default function NoteItem({ id, label, completed, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "rgb(28, 35, 51)",
        color: "rgb(255, 255, 255)",
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
