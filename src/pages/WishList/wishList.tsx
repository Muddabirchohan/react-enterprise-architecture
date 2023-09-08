import React, { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import SideBar from "../../components/Sidebar/sidebar";
import ProductsList from "./ProductList/productsList";
// import classes from "./product.module.scss";
import AppLoader from "../../common/Loader/Loader";
import { CustomError } from "../../common/Error/CustomError";
import WishListItem from "./wishListItem/wishlistItems";
import classes from "./wishlist.module.scss";
import wishlistEmpty from "./../../assets/empty/wishlist-empty.png"
import { EmptyState } from "src/common/EmptyState/emptyState";

import { IState } from "../../features/productSlice";

export default function Wishlist() {

const {wishlist}:IState<[]> = useSelector((state:IState<[]>) => state.productReducer)


const chrckEmptyCart = wishlist && wishlist.length > 0;

if (!chrckEmptyCart) return <EmptyState msg={"You'r wishlist is currently empty ,add any item(s)"} image={wishlistEmpty} />;


  return (
    <div className={classes.wishlistParent}>
      {/* <Suspense fallback={<span> .... </span>}> */}
      {wishlist &&
        wishlist.map((item) => <WishListItem data={item}  />)}
    </div>
  );
}
