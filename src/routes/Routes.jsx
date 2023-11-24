import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateAToy from "../pages/UpdateAToy/UpdateAToy";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
        loader: () =>
          fetch(
            "https://toy-kingdom-server-r4ln1ayxu-s-m-sahariar-rezas-projects.vercel.app/toys"
          ),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "addToy",
        element: (
          <PrivateRoute>
            <AddAToy />
          </PrivateRoute>
        ),
      },
      {
        path: "toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-kingdom-server-r4ln1ayxu-s-m-sahariar-rezas-projects.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "updateToy/:id",
        element: <UpdateAToy />,
        loader: ({ params }) =>
          fetch(
            `https://toy-kingdom-server-r4ln1ayxu-s-m-sahariar-rezas-projects.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);
