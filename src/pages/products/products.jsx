import React, { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import SideBar from "../../components/Sidebar/sidebar";
import ProductsList from "../products/productsList";
import classes from "./product.module.scss";
import AppLoader from "../../common/Loader/Loader";
import { CustomError } from "../../common/Error/CustomError";

// const ProductsList = React.lazy(() =>
//   import("../products/productsList")
// );

// const fetchData = async () => {



//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();

//   return data;
// };

export default function Products() {

    const dispatch = useDispatch();


//   const { data, isLoading, error } = useQuery("myData", fetchData);

    const productState = useSelector((state) => state);

    const {productReducer} = productState

    const {products,errors,loading,error} = productReducer



    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    if (loading)
    return (
      <div>
        {" "}
        <AppLoader />{" "}
      </div>
    );

  if (errors)
    return (
      <div>
        {" "}
        <CustomError />{" "}
      </div>
    );




  return (
    <div className={classes.productParent}>
      {/* <Suspense fallback={<span> .... </span>}> */}
        {products &&  products.map(item => <ProductsList data={item} error={errors} /> )}
    </div>
  );
}
