import React, { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import SideBar from "../../components/Sidebar/sidebar";
import CartItems from "./Cartitems";
import classes from "./cartItems.module.scss";
import { CustomError } from "../../common/Error/CustomError";
import { EmptyState } from "../../common/EmptyState/emptyState";
import AppLoader from "../../common/Loader/Loader";
import { Button } from "antd";
import { setCurrentView } from "../../features/sideBarSlice";
import { useNavigate } from "react-router-dom";

// const CartItem = React.lazy(() =>
//   import("../cart/Cartitems")
// );

export default function Cart({type}) {
    
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const productState = useSelector((state) => state);

  const { productReducer } = productState;

  const { cart, errors, total } = productReducer;

  const chrckEmptyCart = cart && cart.length > 0;

  if (!chrckEmptyCart) return <EmptyState />;

    
  return (
    <div>
      <div className={type !== "miniCart" ? classes.totalStrip : classes.totalStripMiniCart}>
        <span> Cart Total :</span>
        <span>{total.toFixed(0) || 0}</span>
      </div>

      <div className={type !== "miniCart" ? classes.cartParent : classes.miniCartParent}>
        {cart &&
          cart.map((item) => (
            <CartItems key={item.id} data={item} error={errors} type={type} />
          ))}

        <div className={classes.checkoutBtn}>
          <Button
          style={{ width: '100%'}}
            onClick={() => {
              dispatch(setCurrentView("checkout"));
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
