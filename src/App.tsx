import "./App.css";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Route } from "react-router";
import { Routes } from "react-router";
import { HashRouter } from "react-router";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
