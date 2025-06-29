import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="387218234418-qpu5rmkiv8koaug2qstesd1u1ivhd12a.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
