import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Sidebar } from "./components";
import {
  Home,
  About,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/singleProduct/:id" element={<SingleProduct />} />
          <Route
            exact
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
