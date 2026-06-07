import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch {
      return [];
    }
  });

  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    const confirmDelete = window.confirm("Sigur vrei să ștergi acest task?");

    if (!confirmDelete) return;

    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    const confirmClear = window.confirm(
      "Sigur vrei să ștergi toate task-urile completate?"
    );

    if (!confirmClear) return;

    setTodos(todos.filter((todo) => !todo.completed));
  }

  function editTodo(id, newText) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-6">
        <div className="text-center mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
            Daily Planner
          </p>

          <h1 className="text-5xl font-black mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            React To Do
          </h1>

          <p className="text-slate-300 mt-3">
            Organizează-ți task-urile rapid și simplu.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="rounded-2xl bg-slate-950/50 border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold">{todos.length}</p>
            <p className="text-xs text-slate-400">Total</p>
          </div>

          <div className="rounded-2xl bg-slate-950/50 border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold">{activeCount}</p>
            <p className="text-xs text-slate-400">Active</p>
          </div>

          <div className="rounded-2xl bg-slate-950/50 border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold">{completedCount}</p>
            <p className="text-xs text-slate-400">Done</p>
          </div>
        </div>

        <TodoForm text={text} setText={setText} handleSubmit={handleSubmit} />

        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
          completedCount={completedCount}
        />

        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </section>
    </main>
  );
}

export default App;