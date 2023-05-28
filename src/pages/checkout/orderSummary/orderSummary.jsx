import { Col, Divider, Row } from "antd";
import React from "react";
import PaymentForm from "../paymentDetails/paymentDetails";

export default function OrderSummary({ classes, total }) {
  return (
    <div className={classes.orderSummary}>
      <Row>
        <Col span={12}>
          <p> sub total </p>
          <p> Tax </p>
          <p> VAT 15% </p>
          <p> shipping </p>
          <p> discount </p>
        </Col>

        <Col span={12}>
          <p> {total.toFixed(0)} </p>
          <p> 200 Rs </p>
          <p> 100 Rs </p>
          <p> 110 Rs </p>
          <p> 25 % </p>
        </Col>

        <Divider style={{ borderBottom: '1px solid #ffffff' }} />

        <PaymentForm />
      </Row>
    </div>
  );
}
