import React, { Fragment, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/About/about";
import PrivateRoute from "./privateRoute";
import Home from "../components/Home/Home";
import { AuthContext } from "../auth/AuthContext";
import Products from "../pages/products/products";
import ProductLayout from "../layouts/productLayout";
import CartLayout from "../layouts/cartLayout";
import PageLayout from "../layouts/pageLayout";
import Cart from "../pages/cart/cart";
import Checkout from "../pages/checkout/Checkout";
import Order from "../pages/order/order";
import ProductDetail from "../pages/products/ProductDetail/productDetail";
import Wishlist from "src/pages/WishList/wishList";

const RouterDefault = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    // <Router basename="/react-enterprise-architecture">
    //   <Routes>
    //   <Route exact path="/" element={<About />} />

    //       <Route exact path="/about" element={<PrivateRoute />}>
    //     </Route>
    //   </Routes>
    // </Router>
    <Router basename="/react-enterprise-architecture">
      <Fragment>
        <Routes>
          <Route exact path="/" element={<PageLayout />} >
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/order" element={<Order />} />
          </Route>
          {/* <Route exact path="/home" element={<Home />} />
          <Route exact path="/products" element={<PageLayout />} />
          <Route exact path="/products/:id" element={<PageLayout />} />
          <Route exact path="/cart" element={<PageLayout />} />
          <Route exact path="/checkout" element={<PageLayout />} />
          <Route exact path="/order" element={<PageLayout />} />


          <Route
            exact
            path="/about"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route exact path="" element={<About />} />
            
          </Route> */}
        </Routes>
      </Fragment>
    </Router>
  );
};

export default RouterDefault;
