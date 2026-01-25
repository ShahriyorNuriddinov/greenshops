import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
import Layout from "../components/layout/index";
import Profile from "../pages/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
