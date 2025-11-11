import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layouts/Root.jsx";
import Home from "./Pages/Home.jsx";
import AddHabit from "./Pages/AddHabit.jsx";
import Login from "./Pages/Auth/Login.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Register from "./Pages/Auth/Register.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";

// router-----
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-habit",
        element: <AddHabit></AddHabit>,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
