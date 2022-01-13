import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import { ProductProvider } from "./context/ProductsContext";
import { FilterProvider } from "./context/FilterContext";
ReactDOM.render(
  <React.StrictMode>
    <SidebarProvider>
      <ProductProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ProductProvider>
    </SidebarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
