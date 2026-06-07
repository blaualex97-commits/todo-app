function TodoFilters({ filter, setFilter, clearCompleted, completedCount }) {
  const filters = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div className="mb-6">
      <div className="grid grid-cols-3 gap-3">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setFilter(item.value)}
            className={`rounded-2xl px-4 py-3 font-semibold transition ${
              filter === item.value
                ? "bg-white text-slate-950 shadow-lg shadow-white/10"
                : "bg-slate-950/50 text-slate-300 border border-white/10 hover:bg-white/10"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          type="button"
          onClick={clearCompleted}
          className="mt-3 w-full rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 font-semibold text-rose-300 hover:bg-rose-500/20 active:scale-[0.98] transition"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
}

export default TodoFilters;