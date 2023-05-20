import React, { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import SideBar from "../../components/Sidebar/sidebar";

const ProductsList = React.lazy(() =>
  import("../products/productsList")
);

// const fetchData = async () => {



//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();

//   return data;
// };

export default function Products() {

    const dispatch = useDispatch();


//   const { data, isLoading, error } = useQuery("myData", fetchData);

    const productState = useSelector((state) => state);

    const {products,errors,loading} = productState


    useEffect(()=>{
        dispatch(fetchProducts())
    },[])



  return (
    <div>
      <Suspense fallback={<span> .... </span>}>
        <ProductsList data={products} loading={loading} error={errors} />
      </Suspense>
    </div>
  );
}
