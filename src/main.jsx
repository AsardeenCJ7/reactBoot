import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./login.jsx";
import SignUp from "./SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Login /> */}
    <SignUp />
  </StrictMode>
);
