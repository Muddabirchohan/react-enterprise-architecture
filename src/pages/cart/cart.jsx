import React, { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import SideBar from "../../components/Sidebar/sidebar";
import CartItems from "./Cartitems";
import classes from "./cartItems.module.scss"
import { CustomError } from "../../common/Error/CustomError";
import { EmptyState } from "../../common/EmptyState/emptyState";
import AppLoader from "../../common/Loader";

// const CartItem = React.lazy(() =>
//   import("../cart/Cartitems")
// );

export default function Cart() {
  const productState = useSelector((state) => state);

  const { productReducer } = productState;

  const { cart, errors } = productReducer;

  const chrckEmptyCart = cart.length > 0 ;

  if(!chrckEmptyCart) return <EmptyState/>



  return (
    <div className={classes.cartParent}>
      {cart &&
        cart.map((item) => (
          <CartItems data={item} error={errors} />
        ))}
    </div>
  );
}
