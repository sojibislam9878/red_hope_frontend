import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>error</p>,
    children: [
      {
        path: "/",
        element:<App/>
      },
      {
        path: "/about",
        element: <p>about page</p>
      }
    ]
  },
]);