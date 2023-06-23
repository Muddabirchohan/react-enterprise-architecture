import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar/sidebar";
import { Col, Layout, Menu, Row } from "antd";
import Products from "../pages/products/products";
import Header from "../components/Header/Header";
import Banner from "src/pages/Banner/baner";

const BanerLayout = () => (
  <div>

    <Row> 
    <Header/>

    </Row>

    <Row>


      <Col span={24}>
        <Banner />
      </Col>
    </Row>
  </div>
);

export default BanerLayout;
