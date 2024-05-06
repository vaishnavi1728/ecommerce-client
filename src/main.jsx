import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShopContextProvider from "./Context/ShopContext.jsx";
import { AuthProvider } from "./Context/Auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <AuthProvider>
        <App />
        <ToastContainer />
      </AuthProvider>
    </ShopContextProvider>
  </React.StrictMode>
);
