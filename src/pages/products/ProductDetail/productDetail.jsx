import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/productSlice";
import { itemExistArr, nameSplitter } from "../../../utils/utils";
import { Button, Col, Row, Spin } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import classes from "./productDetail.module.scss";
import Product3DViewer from "../../../components/3d/Product3d";

function ProductDetail() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const productState = useSelector((state) => state);

  const { productReducer } = productState;

  const {
    singleProduct: { id, title, price, image, description },
  } = productReducer;

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
      }, 1000);
    }
  };

  return (
    <div className={classes.productDetailParent}>
      <Row gutter={16}>
        <Col className="gutter-row" span={14} offset={2}>
          <div>
            {" "}
            {/* <Product3DViewer productImage={image}/> */}
            <img src={image} className={classes.img} />
          </div>
        </Col>

        <Col span={8} pull={4}>
          <div className={classes.detailSection}>
            {" "}
            <p className={classes.title}> {nameSplitter(title, 100)}</p>
            <p className={classes.detail}> {description} </p>
            <p className={classes.price}> {price} /$ </p>
            <Button
              className={classes.button}
              style={{
                backgroundColor: "#001529",
                color: "white",
                width: "200px",
                fontWeight: 700,
              }}
              onClick={() => addTo({ id, title, price, image })}
            >
              {loader && <Spin />} Add{" "}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
