import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar/sidebar";
import { Col, Layout, Menu, Row } from "antd";
import Products from "../pages/products/products";
import Header from "../components/Header/Header";
import ContentSection from "../components/Content/ContentSection";
import { useSelector } from "react-redux";

import ReactGA from "react-ga";
import { useEffect } from "react";

const PageLayout = () => {
  const sideBarState = useSelector((state) => state.sideBarSlice);

  return (
    <div>
      <Row>
        <Header />
      </Row>

      <Row>
        <Col span={4}>
          <SideBar />
        </Col>
        <Col span={20}>
          <Outlet />
          {/* <ContentSection type={sideBarState.currentTab} /> */}
        </Col>
      </Row>
    </div>
  );
};

export default PageLayout;
