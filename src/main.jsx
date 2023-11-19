import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Order from "./Component/Order";
import AuthPrivider from "./Provider/AuthPrivider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/order", element: <Order></Order> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPrivider>
      <RouterProvider router={router} />
    </AuthPrivider>
  </React.StrictMode>
);
