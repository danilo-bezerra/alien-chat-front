import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Chat } from "../pages/Chat";
import Error from "../pages/Error";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
    errorElement: <Error />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
