import React, { useState } from "react";
import { Drawer, Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import MiniCart from "../miniCart/miniCart";
import SideBar from "../Sidebar/sidebar";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  const navigate = useNavigate();

  // const [cartshow,setCartShow] = useState(false);

  // const showCart = () => {
  //     setCartShow(!cartshow)
  // }

  const keys = ["Cart", "Wishlist"];

  const icons = [<ShoppingCartOutlined />, <HeartOutlined />];

  const sideBarList = keys.map((item, index) => {
    return {
      key: index,
      icon: icons[index],
      label: item,
      onClick: () => {
        // dispatch(setCurrentView(item))
        navigate(`/${item.toLowerCase()}`);
      },
    };
  });

  return (
    <Header
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: "white",
        border: "1px solid #f5f5f5",
      }}
    >
      <div className="logo" />
      <div style={{ display: "flex", justifyContent: "end", gap: "61px" }}>
        {sideBarList.map((item) => (
          <span style={{ color: "blue" }} onClick={item.onClick}>
            {item.icon} {item.label}
          </span>
        ))}
      </div>
    </Header>
  );
};

export default AppHeader;
