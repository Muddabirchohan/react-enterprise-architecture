import { useDispatch, useSelector } from "react-redux";
import { CustomError } from "../../../common/Error/CustomError";
import AppLoader from "../../../common/Loader/Loader";
import { addToCart, setSingleProduct } from "../../../features/productSlice";
import { itemExistArr, nameSplitter } from "../../../utils/utils";
import classes from "./../product.module.scss";
import { Button, Drawer, Spin } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { setCurrentView } from "../../../features/sideBarSlice";
import { useNavigate } from "react-router-dom";
import MiniCart from "../../../components/miniCart/miniCart";
import { useDrawerStore } from "../../../store/rootZustand";

function ProductsList({ data: { id, title, price, image } }) {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const productState = useSelector((state) => state);

  const navigate = useNavigate();

  const setDrawer = useDrawerStore((state) => state.setDrawerState);
  const drawer = useDrawerStore((state) => state.drawerState);

  const setSingle = (e) => {
    e.stopPropagation();
    dispatch(setCurrentView(`details`));
    dispatch(setSingleProduct(id));
    navigate(`/products/${id}`);
  };

  const addToCartHandler = (e) => {
    e.stopPropagation();
    addTo({ id, title, price, image });
  };

  const addTo = ({ id, title, price, image }) => {
    setLoader(true);
    if (itemExistArr(id, productState.productReducer.cart)) {
      toast.warn("already exist", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        setLoader(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setLoader(false);
        dispatch(addToCart({ id, title, price, image }));
        toast.success(`item ${title} added to cart`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setDrawer();
      }, 1000);

      setTimeout(() => {
          setDrawer()
      }, 10000);

    }
  };

  return (
    <div> 
    <div className={classes.singleParent} onClick={(e) => setSingle(e)}>
      <span>
        {" "}
        <Button
          className={classes.button}
          style={{
            backgroundColor: "#001529",
            color: "white",
            width: "200px",
            fontWeight: 700,
          }}
          onClick={addToCartHandler}
        >
          {loader && <Spin />} Add{" "}
        </Button>
      </span>
      <span className={classes.title}> {nameSplitter(title, 45)}</span>
      <span className={classes.price}> {price} /$ </span>
      <span>
        <img src={image} className={classes.img} />
      </span>

          </div>
               {drawer &&
                <MiniCart />}

    </div>
  );
}

export default ProductsList;
