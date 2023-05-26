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
import AppLoader from "../../common/Loader/Loader";

// const CartItem = React.lazy(() =>
//   import("../cart/Cartitems")
// );

export default function Cart() {
  const productState = useSelector((state) => state);

  const { productReducer } = productState;

  const { cart, errors , total } = productReducer;

  const chrckEmptyCart = cart && cart.length > 0 ;

  if(!chrckEmptyCart) return <EmptyState/>


  console.log("total",productReducer)


  return (
    <div
     >

        <div className={classes.totalStrip}>
            <span> Cart Total :
                </span>
    <span> 
            {total.toFixed(0) || 0}
        </span>
        </div>


        <div
     className={classes.cartParent}
     >
      {cart &&
        cart.map((item) => (
          <CartItems key={item.id} data={item} error={errors} />
        ))}
        </div>
    </div>
  );
}
