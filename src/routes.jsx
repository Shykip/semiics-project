import * as React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import TeachersSignUp from "./pages/teachers/TeachersSignUp";
import StudentsSignUp from "./pages/students/StudentsSignUp";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminPanel from "./pages/admin/AdminPanel";
import LandingPage from "./pages/LandingPage";
import UserRegister from "./pages/admin/UserRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminPanel />,
  },
  {
    path: "/admin/user-register",
    element: <UserRegister />,
  },
  ,
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },
  {
    path: "/register/student",
    element: <StudentsSignUp />,
  },
  {
    path: "/register/teacher",
    element: <TeachersSignUp />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
