import { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  function handleEdit() {
    if (newText.trim() === "") return;

    editTodo(todo.id, newText);
    setIsEditing(false);
  }

  return (
    <li className="group flex items-center gap-3 rounded-2xl bg-slate-950/50 border border-white/10 p-3 transition hover:bg-white/10 hover:scale-[1.01]">
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="flex-1 rounded-xl bg-slate-950/80 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 transition"
          />

          <button
            type="button"
            onClick={handleEdit}
            className="rounded-xl bg-emerald-500 px-4 py-3 font-bold text-white hover:bg-emerald-400 active:scale-95 transition"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => toggleTodo(todo.id)}
            className={`h-6 w-6 rounded-full border flex items-center justify-center transition ${
              todo.completed
                ? "bg-cyan-400 border-cyan-400 text-slate-950"
                : "border-slate-500 hover:border-cyan-400"
            }`}
          >
            {todo.completed ? "✓" : ""}
          </button>

          <span
            onClick={() => toggleTodo(todo.id)}
            className={`flex-1 cursor-pointer transition ${
              todo.completed
                ? "line-through text-slate-500"
                : "text-white group-hover:text-cyan-200"
            }`}
          >
            {todo.text}
          </span>

          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 active:scale-95 transition"
          >
            Edit
          </button>

          <button
            type="button"
            onClick={() => deleteTodo(todo.id)}
            className="rounded-xl bg-rose-500/90 px-4 py-2 text-sm font-semibold hover:bg-rose-400 active:scale-95 transition"
          >
            Șterge
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;