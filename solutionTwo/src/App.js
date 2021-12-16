import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedComponent";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* non protected route */}
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />

        {/* protected route */}
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
