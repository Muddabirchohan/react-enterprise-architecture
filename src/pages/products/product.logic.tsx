import { useEffect } from "react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";

export default function useProduct() {
  const dispatch = useDispatch();

  const productState = useSelector((state) => state);

  const { productReducer } = productState;

  const { products, errors, loading } = productReducer;

  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchProducts());
      } catch (err) {
        // setError(err);
      }
    })();
  }, []);

  return {
    errors,
    products,
    loading,
  };
}
