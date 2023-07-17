import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar/sidebar";
import { Col, Layout, Menu, Row } from "antd";
import Products from "../pages/products/products";
import Header from "../components/Header/Header";
import Login from "src/components/Login/Login";
import LoginFront from "./../assets/login/loginFront.png";

const LoginLayout = () => (
  <div>
    <Row>
      <Col span={12}>
        <img src={LoginFront} style={{height: 600}} />
      </Col>

      <Col span={12}>
        <Login />
      </Col>
    </Row>
  </div>
);

export default LoginLayout;
