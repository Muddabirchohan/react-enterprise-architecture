import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  UnorderedListOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import classes from "./sideBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentView } from "../../features/sideBarSlice";
import { Navigate, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

const { Sider } = Layout;
const SideBar = () => {
  const [collapsed] = useState(false);


  const navigate = useNavigate();

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: string,
    key: React.Key,
    icon?: React.ReactNode,
    children?: Menuitem[],
    type?: "group",
    onClick?: any
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
      onClick: () => {
        navigate(label.toLowerCase())
      }
    } as MenuItem;
  }

  const items: MenuItem[] = [
    // getItem("Trending", "1", <PieChartOutlined />),
    getItem("Products", "sub1", <UnorderedListOutlined />, [
      getItem("Men", "5"),
      getItem("Women", "6"),
      getItem("kids", "7"),
    ]),
  ];

  return (
    <>
      <div>
        <Sider
          style={{
            position: "fixed",
            left: 0,
            top: 60,
          }}
          className={`${classes.sidebarParent}`}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            style={{ height: "100vh" }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            items={items}
          />
        </Sider>
      </div>
    </>
  );
};
export default SideBar;
