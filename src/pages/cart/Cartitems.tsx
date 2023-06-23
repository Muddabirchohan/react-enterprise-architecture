import { Col, Divider, Input, Popconfirm, Row } from "antd";
import { CustomError } from "../../common/Error/CustomError";
import AppLoader from "../../common/Loader/Loader";
import { nameSplitter } from "../../utils/utils";
import classes from "./cartItems.module.scss";
import {
  addToCart,
  deleteFromCart,
  icreaseQuantity,
} from "../../features/productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import ConfirmPopup from "../../common/CofirmPopup/confirmPopup";

function CartItems({ data, error, type }) {
  const { title, price, image, quantity, id } = data;

  const dispatch = useDispatch();

  const stock = ["In-Stock", "Out of Stock"];
  const color = ["Red", "blue", "Black"];
  const size = ["S", "M", "L"];

  const [quan, setQuan] = useState(quantity || 0);

  const onChange = (e) => {
    setQuan(e.target.value);
    dispatch(icreaseQuantity({ id: id, quantity: e.target.value }));
  };

  const confirm = () => {
    dispatch(deleteFromCart(id));
  };

  const cancel = () => {
    console.log("canncelled");
  };

  if (error)
    <div>
      <CustomError />{" "}
    </div>;

  return (
    <div className={classes.singleParent}>
     
      <Row >
        <Col className="gutter-row" span={14}>
 
          <Row>

            <Col span={8} offset={4} pull={1}>
            
              <div>
                {" "}
                <img src={image} className={classes.img} />
              </div>
            </Col>

            {type !== "miniCart" ? (
              <Col span={6} offset={2} pull={4}>
                <div className={classes.nameAndPrice}>
                  <div className={classes.name}>{nameSplitter(title, 20)}</div>
                  <div className={classes.price}>
                    <p> color: {color[Math.floor(Math.random() * 2) + 1]}</p>
                    <p> size: {size[Math.floor(Math.random() * 2) + 1]}</p>
                    <p> {stock[Math.floor(Math.random() * 1) + 1]}</p>
                  </div>
                </div>
              </Col>
            ) : 
            
            <Col span={2} offset={2}>
            <div className={classes.nameAndPrice}>
              <div className={classes.price}>
                <span>  {color[Math.floor(Math.random() * 2) + 1]}</span>
                <span>  {size[Math.floor(Math.random() * 2) + 1]}</span>
                {/* <span> {stock[Math.floor(Math.random() * 1) + 1]}</span> */}
              </div>
            </div>
          </Col>
            }
          </Row>
        </Col>

        {type !== "miniCart" && (
          <Col className="gutter-row" span={3} pull={3}>
            <div className={classes.nameAndPrice}>
              <div className={classes.name}>Quantity</div>
              <div className={classes.price}>
                <p>
                  {" "}
                  <Input value={quan} onChange={onChange} maxLength={10} />
                </p>
              </div>
            </div>
          </Col>
        )}

        <Col className="gutter-row" span={3} pull={2}>
          <div className={classes.nameAndPrice}>
          {type !== "miniCart" &&    <div className={classes.name}>Price</div>}
            <div className={classes.price}>
              <p>{(price * quan).toFixed(0)}</p>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" span={3} pull={2}>
          <div className={`${classes.nameAndPrice} mt-3`}>
            <ConfirmPopup
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            />
          </div>
        </Col>
      </Row>

      <Divider />
    </div>
  );
}

export default CartItems;
