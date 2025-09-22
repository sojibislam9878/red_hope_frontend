import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import FindBlood from "../pages/FindBlood";
import BecomeDonar from "../pages/BecomeDonar";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import Error from "../pages/error/Error";
import PrivateRoute from "../components/PrivateRoute";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/find_blood",
        element: <FindBlood />,
      },
      {
        path: "/become_donar",
        element: (
          <PrivateRoute>
            <BecomeDonar />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
