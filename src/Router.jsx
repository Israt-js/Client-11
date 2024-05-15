import { createBrowserRouter } from "react-router-dom";
import Maine from "./Maine";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateAssignment from "./components/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Assignment from "./components/Assignment";
import Update from "./components/Update";

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
        },
        {
          path: "/assignment",
          element: <Assignment></Assignment>,
        },
        {
          path: "/update/:id",
          element: <Update></Update>,
          loader: ({params}) => fetch(`http://localhost:5000/createAssign/${params.id}`)
        }

      ]
    }
  ]);

export default router;
