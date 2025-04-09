import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./Login.jsx"; // array functional component should be {}
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";
import Counter from "./Counter.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/count",
    element: <Counter />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <Login />
    <Home />
    <SignUp /> */}
  </StrictMode>
);
