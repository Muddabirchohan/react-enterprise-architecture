
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
import { useEffect, useState } from "react";
import classes from "./sideBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentView } from "../../features/sideBarSlice";
import { Navigate, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { setCat } from "src/features/productSlice";
import { useTranslation } from "react-i18next";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  const [collapsed] = useState(false);

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation();

  type MenuItem = Required<MenuProps>["items"][number];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  function generateMenuItems(category: string, index: number): MenuItem {
    return {
      key: category.toLowerCase(),
      label: category,
      icon: <UnorderedListOutlined />,
      onClick: () => {
        dispatch(setCat(category.toLowerCase()));
        // navigate(category.toLowerCase());
      },
    };
  }

  function generateSubMenuItems(): MenuItem[] {
    return categories.map((category, index) =>
      generateMenuItems(category, index)
    );
  }

  const items: MenuItem[] = [
    {
      key: "sub1",
      label: t("Categories") || "Categories",
      icon: <UnorderedListOutlined />,
      children: generateSubMenuItems(),
    },
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
