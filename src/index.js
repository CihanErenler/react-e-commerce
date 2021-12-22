import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import { ProductProvider } from "./context/ProductsContext";

ReactDOM.render(
  <React.StrictMode>
    <SidebarProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </SidebarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
