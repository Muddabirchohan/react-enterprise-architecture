import { Col, Divider, Input, Popconfirm, Row } from "antd";
import { CustomError } from "../../common/Error/CustomError";
import AppLoader from "../../common/Loader/Loader";
import { nameSplitter } from "../../utils/utils";
import classes from "./orderSummary.module.scss";
import { addToCart, deleteFromCart, icreaseQuantity } from "../../features/productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";


function CartItemsOrder({ data, error }) {
  const { title, price, image, quantity, id } = data;
  

  const dispatch = useDispatch();

  const stock:string[] = ["In-Stock", "Out of Stock"];
  const color:string[] = ["Red", "blue", "Black"];
  const size:string[] = ["S", "M", "L"];

  const [quan, setQuan] = useState(quantity || 0);

  const onChange = (e: { target: { value: any; }; }) => {
    setQuan(e.target.value);
    dispatch(icreaseQuantity({ id: id, quantity: e.target.value }));
  };



  const confirm = () => {
    dispatch(deleteFromCart(id))
    
  };
  
  const cancel = () => {
    console.log("canncelled")
};

  if (error)  (
      <div>
        <CustomError />{" "}
      </div>
    );

  return (
    <div
     className={classes.singleParent}
    >
      <Row gutter={16}>
        <Col className="gutter-row" span={14}>
          <Row>
            <Col span={8} offset={4} pull={1}>
              <div>
                {" "}
                <img src={image} className={classes.img} />
              </div>
            </Col>

            <Col span={6} offset={2} pull={4}>
              <div className={classes.nameAndPrice}>
                <div className={classes.name}>{nameSplitter(title, 20)}</div>
                <div className={classes.price}>
                  <span>  {color[Math.floor(Math.random() * 2) + 1]},</span>
                  <span>  {size[Math.floor(Math.random() * 2) + 1]},</span>
                  <span> {stock[Math.floor(Math.random() * 1) + 1]}</span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col className="gutter-row" span={5} pull={3}>
          <div className={classes.nameAndPrice}>
            <div className={classes.name}>Quantity</div>
            <div className={classes.price}>
              <p>
                {" "}
               <p> {quantity} </p>
              </p>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" span={5} pull={2}>
          <div className={classes.nameAndPrice}>
            <div className={classes.name}>Price</div>
            <div className={classes.price}>
                <p>
            {(price * quan).toFixed(0)} $
            </p>
            </div>
          </div>
        </Col>

 
      </Row>

    </div>
  );
}

export default CartItemsOrder;
