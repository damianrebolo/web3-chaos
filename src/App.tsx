import "./App.css";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Route, BrowserRouter } from "react-router";
import { Routes } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
