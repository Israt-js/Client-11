import { createBrowserRouter } from "react-router-dom";
import Maine from "./Maine";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateAssignment from "./components/CreateAssignment";
import PrivateRoute from "./PrivateRoute";

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
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/create",
          element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
        }
      ]
    }
  ]);

export default router;
