import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
