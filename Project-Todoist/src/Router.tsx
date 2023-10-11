import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./components/logUser/Login";
import Register from "./components/logUser/Register"
import CreateTags from "./components/tags/CreateTags";
import UpdateTags from "./components/tags/UpdateTags";
import DeleteTags from "./components/tags/DeleteTags";
import CreateTask from "./components/task/CreateTask";
import UpdateTask from "./components/task/UpdateTask";
import DeleteTask from "./components/task/DeleteTask";
import DashboardTag from "./components/dashboards/DashboardTag";
import DashboardTask from "./components/dashboards/DashboardTask";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/createtag" element={<CreateTags />} />
      <Route path="/updatetag" element={<UpdateTags />} />
      <Route path="/deletetag" element={<DeleteTags />} />
      <Route path="/createtask" element={<CreateTask />} />
      <Route path="/updatetask" element={<UpdateTask />} />
      <Route path="/deletetask" element={<DeleteTask />} />
      <Route path="/dashboardTags" element={<DashboardTag />} />
      <Route path="/dashboardTasks" element={<DashboardTask />} />


    </Routes>
  );
};