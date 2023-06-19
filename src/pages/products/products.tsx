import React, { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import SideBar from "../../components/Sidebar/sidebar";
import ProductsList from "./ProductList/productsList";
import classes from "./product.module.scss";
import AppLoader from "../../common/Loader/Loader";
import { CustomError } from "../../common/Error/CustomError";
import Product3D from "../../components/3d/Product3d";
import useProduct from "./product.logic";

// const ProductsList = React.lazy(() =>
//   import("../products/productsList")
// );

// const fetchData = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   return data;
// };

export default function Products() {
  const { errors, products, loading } = useProduct();

  if (loading)
    return (
      <div>
        {" "}
        <AppLoader />
      </div>
    );

  if (errors)
    return (
      <div>
        {" "}
        <CustomError />
      </div>
    );

  return (
    <div className={classes.productParent}>
      {/* <Suspense fallback={<span> .... </span>}> */}
      {products &&
        products.map((item) => <ProductsList data={item} error={errors} />)}
    </div>
  );
}
