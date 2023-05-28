import { useDispatch, useSelector } from "react-redux";
import { addToCart, setSingleProduct } from "../../features/productSlice";
import { itemExistArr, nameSplitter } from "../../utils/utils";
import classes from "./checkout.module.scss";
import { Button, Col, Divider, Row, Spin } from "antd";
import { useState } from "react";
import { setCurrentView } from "../../features/sideBarSlice";
import { useNavigate } from "react-router-dom";
import OrderSummary from "./orderSummary/orderSummary";
import CheckoutCart from "./checkoutCart/checkoutCart";
import PaymentForm from "./paymentDetails/paymentDetails";

function Checkout() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const productState = useSelector((state) => state);

  const { productReducer } = productState;

  const { cart, total } = productReducer;

  const navigate = useNavigate();

  return (
    <div className={`${classes.checkoutParent}`}>
      <div className={classes.singleParent}>
        <Row>
          <Col span={20} push={1}>
            {cart.map((item) => (
              <CheckoutCart classes={classes} data={item} />
            ))}
          </Col>

          <Col span={4} pull={4}>
            <div className={classes.order}>
              <OrderSummary total={total} classes={classes} />
              <Button onClick={() => {
                 navigate("/order")
                 dispatch(setCurrentView("order"))
              }}>
                {" "}
                Order Confirm{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Checkout;
