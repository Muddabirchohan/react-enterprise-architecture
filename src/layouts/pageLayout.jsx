import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar/sidebar";
import { Col, Layout, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
const PageLayout = () => (
  <div>
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
    </Layout>
    <Row>
      <Col span={5}>
        <SideBar />
      </Col>
      <Col span={19}>
        <Outlet />
      </Col>
    </Row>
  </div>
);

export default PageLayout;
