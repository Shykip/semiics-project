import * as React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import TeachersSignUp from "./pages/teachers/TeachersSignUp";
import StudentsLoginPage from "./pages/students/StudentsLoginPage";
import TeachersLoginPage from "./pages/teachers/TeachersLoginPage";
import StudentsSignUp from "./pages/students/StudentsSignUp";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminPanel from "./pages/admin/AdminPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },

  {
    path: "/students/login",
    element: <StudentsLoginPage />,
  },
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },
  {
    path: "/admin/register",
    element: <AdminPanel />,
  },
  {
    path: "/students/signup",
    element: <StudentsSignUp />,
  },
  {
    path: "/teachers/signup",
    element: <TeachersSignUp />,
  },
  {
    path: "/teachers/login",
    element: <TeachersLoginPage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
