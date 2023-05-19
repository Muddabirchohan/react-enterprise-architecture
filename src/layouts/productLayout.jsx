import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar/sidebar";
import { Col, Layout, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import Products from "../pages/products/products";


const ProductLayout = () => (
  <div>
 
    <Row>
      <Col span={5}>
        <SideBar />
      </Col>
      <Col span={19}>
        <Products />
      </Col>
    </Row>
  </div>
);

export default ProductLayout;
