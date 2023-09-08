import React, {
  Suspense,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
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
import { useProduct } from "./product.logic";
import App from "src/App";
import CategoryTag from "src/components/Category/CategoryTag";
// import { useTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { getCachedData } from "src/utils/cacheUtil";
import Deffered from "src/components/deferredValue/deffered";

// const ProductsList = React.lazy(() =>
//   import("../products/productsList")
// );

// const fetchData = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   return data;
// };

// export default function Products() {
//   const { t, i18n } = useTranslation();

//   const { errors, products, loading } = useProduct();

//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = useCallback(() => {
//     fetch("https://fakestoreapi.com/products/categories")
//       .then((res) => res.json())
//       .then((json) => setCategories(json));
//   }, []);

//   // const result = useMemo(() => fetchData(), [categories]);

//   if (loading)
//     return (
//       <div>
//         {" "}
//         <AppLoader />
//       </div>
//     );

//   if (errors)
//     return (
//       <div>
//         {" "}
//         <CustomError />
//       </div>
//     );

//   return (
//     <div style={{ marginTop: 100 }}>

//       <CategoryTag categories={categories} />
//       <div className={classes.productParent}>
//         {/* <Suspense fallback={<span> .... </span>}> */}
//         {products &&
//           products.map((item) => <ProductsList data={item} error={errors} />)}
//       </div>
//     </div>
//   );
// }

const CachedApiComponent = () => {
  const { t, i18n } = useTranslation();

  const { errors, products, loading } = useProduct();

  const [categories, setCategories] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData =  async () => {
      const apiUrl = "https://fakestoreapi.com/products/categories";
      const cachedData = await getCachedData(apiUrl);
      console.log("nnew ",cachedData)
      setCategories(cachedData);
      setIsLoading(false);
    };

    fetchData();
  }, []); 

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
    <div>
      {/* <Deffered/> */}
      <div style={{ marginTop: 100 }}>
        <CategoryTag categories={categories} />
        <div className={classes.productParent}>
          {products &&
            products.map((item) => <ProductsList data={item} error={errors} />)}
        </div>
      </div>
    </div>
  );
};

export default CachedApiComponent;
