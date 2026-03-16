import "./App.css";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Route, BrowserRouter } from "react-router";
import { Routes } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
