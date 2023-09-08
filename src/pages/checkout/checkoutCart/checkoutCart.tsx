import { Col, Row } from "antd";
import React from "react";
import { nameSplitter } from "../../../utils/utils";

export default function CheckoutCart({classes,data}) {

    const {title,price,quantity,image} = data
    
  const stock:string[] = ["In-Stock", "Out of Stock"];
  const color:string[] = ["Red", "blue", "Black"];
  const size:string[] = ["S", "M", "L"];


  return (
    <div>
      <Row gutter={16} style={{ paddingTop: 30 }}>
        <Col className="gutter-row" span={10} offset={2}>
          <Row>
            <Col span={8} pull={3}>
              <div>
                {" "}
                <img src={image} className={classes.img} />
              </div>
            </Col>

            <Col span={12} pull={1}>
              <div className={classes.nameAndPrice}>
                <div className={classes.name}>{nameSplitter(title, 30)}</div>
                <div className={classes.price}>
                  <p> color: {color[Math.floor(Math.random() * 2) + 1]}</p>
                  <p> size: {size[Math.floor(Math.random() * 2) + 1]}</p>
                  <p> {stock[Math.floor(Math.random() * 1) + 1]}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col className="gutter-row" span={6} pull={1}>
          <div className={classes.nameAndPrice}>
            <div className={classes.name}>Quantity</div>
            <div className={classes.price}>
              <p>{quantity}</p>
            </div>
            <div className={classes.name}>Price</div>
            <div className={classes.price}>
              <p>{(price * quantity).toFixed(0)}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
