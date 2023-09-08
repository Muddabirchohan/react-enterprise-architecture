import React, { useState } from "react";
import classes from "./orderSummary.module.scss";
import { Button, Col, Divider, Drawer, Row } from "antd";
import CartItems from "../cart/Cartitems";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItemsOrder from "./cartItemsOrder";
import { setCurrentView } from "../../features/sideBarSlice";
import { type } from "@testing-library/user-event/dist/type";
import { CustomSuccess } from "../../common/Success/customSuccess";

export default function Order() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [compType, setCompType] = useState<string>("order-summary");

  const productState = useSelector((state) => state);

  const { productReducer } = productState;

  const { cart, errors, total } = productReducer;

  const orderSubmitAction = () => {
    setCompType("finished-order");
  };

  const renderComponent = () => {
    switch (compType) {
      case "order-summary":
        return (
          <div className={classes.orderSummaryParent}>
            <div className={classes.orderTitle}>Order No 4 : Summary</div>

            <Row>
              <Col span={6}>
                <div>
                  <div className={classes.orderHead}>
                    {" "}
                    Shipping & Billing Info{" "}
                  </div>
                  <Row>
                    <Col span={12}>
                      <div className={classes.subHead}> First Name </div>
                      <div> Muddabir </div>
                      <div className={classes.subHead}> Email Address </div>
                      <div> muddabir.chohan@hotmail.com </div>

                      <div className={classes.subHead}> Phone Number </div>
                      <div> 090078601 </div>

                      <div className={classes.subHead}> Shipping Address </div>
                      <div> Saddar Karachi , po box 7440 nadra office </div>
                      <br />
                    </Col>

                    <Col span={12}>
                      <div className={classes.subHead}> Last Name </div>
                      <div> Chohan </div>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col span={6}>
                <div>
                  <div className={classes.orderHead}> Payment Method </div>
                  <div className={classes.subHead}> Your Choice </div>
                  <div> Cash on Delivery </div>
                  <br />

                  <div className={classes.orderHead}> Shipping Method </div>
                  <div className={classes.subHead}> Your Choice </div>
                  <div> Czech Post service (1-3 working days) </div>
                </div>
              </Col>

              <Col span={12} className={classes.overflowContainer}>
                <div className={classes.orderHeadItems}>
                  {" "}
                  Items in your bag{" "}
                </div>
                {cart &&
                  cart.map((item) => (
                    <CartItemsOrder key={item.id} data={item} error={errors} />
                  ))}
                <div className={classes.totalPrice}> Sub Total : {total}</div>
              </Col>
            </Row>

            <Divider />

            <div className={classes.orderButtonWrapper}>
              <Button
                className={classes.buttonPay}
                onClick={() => {
                  navigate(-1);
                }}
              >
                {" "}
                Back to payment{" "}
              </Button>
              <Button
                className={classes.buttonOrder}
                onClick={orderSubmitAction}
              >
                {" "}
                Finish order{" "}
              </Button>
            </div>
          </div>
        );

      case "finished-order":
        return (
          <div>
            <Drawer
              title="Order Fulfilled"
              placement="right"
              width={500}
            //   closable={false}
              onClose={() => setCompType("order-summary")}
              open={true}
            >
             <CustomSuccess/>
            </Drawer>
          </div>
        );
    }
  };

  return renderComponent();
}
