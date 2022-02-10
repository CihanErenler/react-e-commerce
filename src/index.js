import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import { ProductProvider } from "./context/ProductsContext";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-udcr1gzo.us.auth0.com"
      clientId="WvlrGYzsxpP7rZR4iiTK6lXkobF7Zn0A"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <SidebarProvider>
          <ProductProvider>
            <FilterProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </FilterProvider>
          </ProductProvider>
        </SidebarProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
