import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import ShopInfo from "../pages/shop-info";
import Blogs from "../pages/blogs";
import Profile from "../pages/profile";
import Checkout from "../pages/checkout";
import Layout from "../components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop-info/:category/:id",
        element: <ShopInfo />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "checkout-your-order",
        element: <Checkout />,
      },
    ],
  },
]);
