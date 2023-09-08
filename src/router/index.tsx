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
import Banner from "src/pages/Banner/baner";
import BanerLayout from "src/layouts/bannerLayout";
import Login from "src/components/Login/Login";
import LoginLayout from "src/layouts/loginLayout";
import App from "src/App";

const RouterDefault = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    // <Router basename="/react-enterprise-architecture">
    //   <Routes>
    //   <Route  path="/" element={<About />} />

    //       <Route  path="/about" element={<PrivateRoute />}>
    //     </Route>
    //   </Routes>
    // </Router>
    <Router basename="/react-enterprise-architecture">
      <Fragment>
        <Routes>
          <Route  path="/" element={<BanerLayout />} />
          <Route  path="/" element={<PageLayout />}>
          <Route  path="/app" element={<App />} />
            <Route  path="/products" element={<Products />} />
            <Route  path="/products/:id" element={<ProductDetail />} />
            <Route  path="/wishlist" element={<Wishlist />} />
            <Route  path="/cart" element={<Cart />} />
            <Route  path="/checkout" element={<Checkout />} />
            <Route  path="/order" element={<Order />} />
          </Route>

          <Route  path="/login" element={<LoginLayout />} />

          {/* <Route  path="/home" element={<Home />} />
          <Route  path="/products" element={<PageLayout />} />
          <Route  path="/products/:id" element={<PageLayout />} />
          <Route  path="/cart" element={<PageLayout />} />
          <Route  path="/checkout" element={<PageLayout />} />
          <Route  path="/order" element={<PageLayout />} />


          <Route
            
            path="/about"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route  path="" element={<About />} />
            
          </Route> */}
        </Routes>
      </Fragment>
    </Router>
  );
};

export default RouterDefault;
