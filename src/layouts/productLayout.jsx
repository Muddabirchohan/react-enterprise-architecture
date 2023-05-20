import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar/sidebar";
import { Col, Layout, Menu, Row } from "antd";
import Products from "../pages/products/products";
import Header from "../components/Header/Header";

const ProductLayout = () => (
  <div>

    <Row> 
    <Header/>

    </Row>

    <Row>

      <Col span={4}>
        <SideBar />
      </Col>
      <Col span={20}>
        <Products />
      </Col>
    </Row>
  </div>
);

export default ProductLayout;
