import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import FindBlood from "../pages/FindBlood";
import BecomeDonar from "../pages/BecomeDonar";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <p>error</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/find_blood",
        element: <FindBlood/>,
      },
      {
        path: "/become_donar",
        element: <BecomeDonar/>,
      },
      {
        path: "/signup",
        element: <SignUpPage/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
    ],
  },
]);
