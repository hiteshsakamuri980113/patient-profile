import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 py-10 bg-neutral-950 text-neutral-100">
      <div className="flex items-center gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
        Vite + React + Tailwind
      </h1>
      <div className="card space-y-4">
        <button
          className="rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-sm text-neutral-400">
          Edit <code className="font-mono text-pink-300">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-neutral-500 text-xs">
        Now styled with Tailwind utility classes
      </p>
    </div>
  );
}

export default App;
