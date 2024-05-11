import { createBrowserRouter } from "react-router-dom";
import Maine from "./Maine";
import Home from "./components/Home";
import Login from "./components/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Maine />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    }
  ]);

export default router;
