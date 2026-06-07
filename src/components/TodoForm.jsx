function TodoForm({ text, setText, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-5"
    >
      <input
        type="text"
        placeholder="Adaugă un task important..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded-2xl bg-slate-950/60 border border-white/10 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 transition"
      />

      <button
        type="submit"
        className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-bold shadow-lg shadow-blue-500/20 hover:scale-[1.03] active:scale-95 transition"
      >
        Adaugă
      </button>
    </form>
  );
}

export default TodoForm;