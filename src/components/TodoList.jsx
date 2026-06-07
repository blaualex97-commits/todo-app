import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  if (todos.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 bg-slate-950/40 p-10 text-center">
        <p className="text-4xl mb-3">🚀</p>
        <p className="text-lg font-semibold text-white">Niciun task aici</p>
        <p className="text-sm text-slate-400 mt-1">
          Adaugă primul task și începe organizarea.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;