import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import ShopInfo from "../pages/shop-info";
import Blogs from "../pages/blogs";
import Profile from "../pages/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop-info/:category/:id",
    element: <ShopInfo />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
