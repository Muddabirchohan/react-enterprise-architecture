import { useDispatch, useSelector } from "react-redux";
import { CustomError } from "../../../common/Error/CustomError";
import AppLoader from "../../../common/Loader/Loader";
import { addToCart } from "../../../features/productSlice";
import { itemExistArr, nameSplitter } from "../../../utils/utils";
// import classes from "./../product.module.scss";
import { Button, Col, Drawer, Row, Spin } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { setCurrentView } from "../../../features/sideBarSlice";
import { useNavigate } from "react-router-dom";
import { useDrawerStore } from "../../../store/rootZustand";
import ReactGA from "react-ga";
import { PlusCircleOutlined, HeartTwoTone } from "@ant-design/icons";
import Icon, { HomeOutlined } from "@ant-design/icons";
import classes from "./../wishlist.module.scss";

function WishListItem({ data }) {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();


  const addToCartHandler = (e) => {
    e.stopPropagation();
    addTo({ id, title, price, image });
  };

  if (!data) {
    return;
  }



  const { title, price, image } = data;

  return (
    <div className={`${classes.singleParent}  
   
    `}>
      <span>
        <Row gutter={6}>
          <Col className="gutter-row" span={4} pull={22}>
            {loader ? (
              <Spin />
            ) : (
              <PlusCircleOutlined
                style={{ fontSize: 24, color: "#72baff" }}
                onClick={addToCartHandler}
              />
            )}
          </Col>

          <Col className="gutter-row" span={4} push={22}></Col>
        </Row>
      </span>
      <span className={classes.title}>{nameSplitter(title, 45)}</span>
      <span className={classes.price}> {price} /$ </span>
      <span>
        {/* <Product3DViewer productImage={image}/> */}
        <img
          src={image}
          className={classes.img}
        />
      </span>
    </div>
  );
}

export default WishListItem;
