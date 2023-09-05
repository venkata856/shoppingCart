import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/root.jsx";
import ErrorPage from "./error-page";
import Products, { productsData } from "./Components/Products";
import SingleProduct, { loadSingleProduct } from "./Components/SingleProduct";
import HomePage, { homePageDataLoader } from "./Components/homePage";
import { ShopContextProvider } from "./Context/shop-context";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ShopContextProvider>
        <Root />
      </ShopContextProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ShopContextProvider>
            <HomePage />
          </ShopContextProvider>
        ),
        loader: homePageDataLoader,
      },
      {
        path: "/shop",
        element: (
          <ShopContextProvider>
            <Products />
          </ShopContextProvider>
        ),
        loader: productsData,
      },
      {
        path: "/cart",
        element: (
          <ShopContextProvider>
            <Cart />
          </ShopContextProvider>
        ),
      },
    ],
  },
  {
    path: "shop/:id",
    element: <SingleProduct />,
    loader: loadSingleProduct,
  },
  {
    path: "/cart",
    element: (
      <ShopContextProvider>
        <Cart />
      </ShopContextProvider>
    ),
  },
  {
    path: "/checkout",
    element: (
      <ShopContextProvider>
        <Checkout />
      </ShopContextProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
