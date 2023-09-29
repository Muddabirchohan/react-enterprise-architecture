import { useDispatch, useSelector } from "react-redux";
import { CustomError } from "../../../common/Error/CustomError";
import AppLoader from "../../../common/Loader/Loader";
import { addToCart, removeFromWishlist } from "../../../features/productSlice";
import { itemExistArr, nameSplitter } from "../../../utils/utils";
// import classes from "./../product.module.scss";
import { Button, Col, Drawer, Row, Spin } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { MouseEvent, useState } from "react";
import { setCurrentView } from "../../../features/sideBarSlice";
import { useNavigate } from "react-router-dom";
import { useDrawerStore } from "../../../store/rootZustand";
import ReactGA from "react-ga";
import { PlusCircleOutlined, HeartTwoTone } from "@ant-design/icons";
import Icon, { HomeOutlined } from "@ant-design/icons";
import classes from "./../wishlist.module.scss";


interface IToast {
  state: boolean;
  message: string;
  type: string;
}

function WishListItem({ data }) {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState<boolean>(false);

  const [renderToast, setRenderToast] = useState<IToast>({
    state: false,
    message: "",
    type: "",
  });

  const productState = useSelector((state) => state);

  const navigate = useNavigate();

  const addToCartHandler = (e: MouseEvent<HTMLSpanElement, MouseEvent>, data: { id: any; title: any; price: any; image: any; }) => {
    const { id, title, price, image } = data;

    e.stopPropagation();
    addTo({ id, title, price, image });
  };

  const removeItem = (id) => {
    dispatch(removeFromWishlist({ id }));
  }

  const addTo = ({ id, title, price, image }) => {
    setLoader(true);
    if (itemExistArr(id, productState.productReducer.cart)) {
      setRenderToast((prevState) => ({
        ...prevState,
        state: true,
        message: "already exist",
        type: "warning",
      }));

      setTimeout(() => {
        setLoader(false);
        setRenderToast((prevState) => ({
          ...prevState,
          state: false,
        }));
      }, 1000);
    } else {
      setTimeout(() => {
        setLoader(false);
        dispatch(addToCart({ id, title, price, image }));
        setRenderToast((prevState) => ({
          ...prevState,
          state: true,
          message: "item added to cart",
          type: "success",
        }));
      }, 1000);

      setTimeout(() => {
        // setDrawer();
        setRenderToast((prevState) => ({
          ...prevState,
          state: false,
        }));
      }, 3000);
    }
  };

  if (!data) {
    return;
  }

  const { title, price, image } = data;

  return (
    <div
      className={`${classes.singleParent}  
   
    `}
    >
      <span>
        <Row gutter={6}>
          <Col className="gutter-row" span={4} pull={22}>
            {loader ? (
              <Spin />
            ) : (
              <><PlusCircleOutlined
                style={{ fontSize: 24, color: "#72baff" }}
                onClick={(e) => addToCartHandler(e, data)} /><button onClick={() => removeItem(data.id)}> delete </button></>
            )}
          </Col>

          <Col className="gutter-row" span={4} push={22}></Col>
        </Row>
      </span>
      <span className={classes.title}>{nameSplitter(title, 45)}</span>
      <span className={classes.price}> {price} /$ </span>
      <span>
        {/* <Product3DViewer productImage={image}/> */}
        <img src={image} className={classes.img} />\

      </span>
    </div>
  );
}

export default WishListItem;
