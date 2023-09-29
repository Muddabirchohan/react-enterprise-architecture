import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar/sidebar";
import { Col, Layout, Menu, Row } from "antd";
import Products from "../pages/products/products";
import Header from "../components/Header/Header";
import ContentSection from "../components/Content/ContentSection";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom'
import ReactGA from "react-ga";
import { useEffect } from "react";

const PageLayout = () => {
  const sideBarState = useSelector((state) => state.sideBarSlice);
  const location = useLocation();


  return (
    <div>
      <Row>
        <Header />
      </Row>

    {location.pathname.includes("products") ? 
      <Row>
      <Col span={4}>
        <SideBar />
      </Col>
      <Col span={20}>
        <Outlet />
        {/* <ContentSection type={sideBarState.currentTab} /> */}
      </Col>
    </Row>
  
  : 
  <Row>

  <Col span={24}>
    <Outlet />
    {/* <ContentSection type={sideBarState.currentTab} /> */}
  </Col>
</Row>
  
  }
    
    </div>
  );
};

export default PageLayout;
