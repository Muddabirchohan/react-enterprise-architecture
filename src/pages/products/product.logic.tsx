import { useEffect } from "react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchSingle } from "../../features/productSlice";

export const  useProduct = () => {
  const dispatch = useDispatch();

  const productState = useSelector((state) => state);

  const { productReducer } = productState;

  const { products, errors, loading,category } = productReducer;

  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchProducts(category));
      } catch (err) {
        // setError(err);
      }
    })();
  }, [category]);

  return {
    errors,
    products,
    loading,
  };
}

export const useProductSingle = (id) => {
  const dispatch = useDispatch();

  const productState = useSelector((state) => state);

  const { productReducer } = productState;

  const { singleProduct, loadingSingle,errorSingle } = productReducer;


  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchSingle(id));
      } catch (err) {
        console.log("err",err)
        // setError(err);
      }
    })();
  }, []);

  return {
    singleProduct,
    loadingSingle,
    errorSingle
  };
}
