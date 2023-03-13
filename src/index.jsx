import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Error from "./pages/Error";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Home />,
  },
  {
		path: "*",
		element: <Error />,
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);