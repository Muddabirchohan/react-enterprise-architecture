import React, { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, fetchProducts } from "../../features/productSlice";
import SideBar from "../../components/Sidebar/sidebar";
import CartItems from "./Cartitems";
import classes from "./cartItems.module.scss";
import { CustomError } from "../../common/Error/CustomError";
import { EmptyState } from "../../common/EmptyState/emptyState";
import AppLoader from "../../common/Loader/Loader";
import { Button } from "antd";
import { setCurrentView } from "../../features/sideBarSlice";
import { useNavigate } from "react-router-dom";
import EmptyScreen from "./../../assets/empty/shopping-cart.png";
import ConfirmPopup from "src/common/CofirmPopup/confirmPopup";
import Loader from "src/common/Loader/Loader";

// const CartItem = React.lazy(() =>
//   import("../cart/Cartitems")
// );

export interface ICart {
  type?: string;
}

export default function Cart({ type }: ICart) {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const productState = useSelector((state) => state);

  const { productReducer } = productState;

  const { cart, errors, total } = productReducer;

  const chrckEmptyCart = cart && cart.length > 0;

  const emptyCart = () => {
    setLoader(true);
    dispatch(clearCart("empty"));

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  const cancel = () => {
    console.log("canncelled");
  };

  if (loader) {
    return <Loader />;
  }

  if (!chrckEmptyCart)
    return (
      <EmptyState
        msg={"You'r Cart is currently empty ,add any item(s)"}
        image={EmptyScreen}
      />
    );

  return (
    <div>
      <div
        className={
          type !== "miniCart" ? classes.totalStrip : classes.totalStripMiniCart
        }
      >
        {type !== "miniCart" && (
          <>
            <span> Cart Total :</span>
            <span>{total.toFixed(0) || 0}</span>
          </>
        )}
      </div>

      <ConfirmPopup
        title="Empty Data"
        description="Are you sure to empty cart?"
        onConfirm={emptyCart}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
        deleteType="text"
      />

      <div
        className={
          type !== "miniCart" ? classes.cartParent : classes.miniCartParent
        }
      >
        {cart &&
          cart.map((item) => (
            <CartItems key={item.id} data={item} error={errors} type={type} />
          ))}

        <div className={classes.checkoutBtn}>
          <Button
            style={{
              backgroundColor: "#255eff",
              color: "white",
              width: "80%",
            }}
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
