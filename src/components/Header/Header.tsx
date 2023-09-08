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
import { useTranslation } from "react-i18next";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import type { MenuProps } from "antd";

const { Header } = Layout;

interface ISidebarItems  {
  key: number;
  icon: JSX.Element;
  label: string;
  onClick: () => void;
}

const AppHeader = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const keys = [t("Cart") || "Cart",t("Wishlist") || "Wishlist", "Products"];

  const icons = [<ShoppingCartOutlined />, <HeartOutlined />];

  const sideBarList:ISidebarItems[] = keys.map((item, index) => {
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


  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const items: MenuProps["items"] = [
    {
      label: "english",
      key: "en",
      icon: <UserOutlined />,
    },
    {
      label: "french",
      key: "fr",
      icon: <UserOutlined />,
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    changeLanguage(e.key);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

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


          <div> 
        <Dropdown menu={menuProps}>
          <Button>
            <Space>Locale-{i18n.language}</Space>
          </Button>
        </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
