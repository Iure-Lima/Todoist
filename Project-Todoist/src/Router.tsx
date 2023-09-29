import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./components/logUser/Login";
import Register from "./components/logUser/Register"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};