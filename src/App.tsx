import { useState } from "react";
import "./App.css";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [view, setView] = useState("HOME");
  if (view === "HOME") return <HomePage onStart={() => setView("GAME")} />;

  return <Dashboard />;
};

export default App;
