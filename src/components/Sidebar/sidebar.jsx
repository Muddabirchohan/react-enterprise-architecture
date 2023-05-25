import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import classes from "./sideBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentView } from "../../features/sideBarSlice";
import { Navigate, useNavigate } from "react-router-dom";

const { Sider } = Layout;
const SideBar = () => {
  const [collapsed] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate()


  const keys = ["Products", "Cart", "Trending"];

  const sideBarList = keys.map((item, index) => {
    return {
      key: index,
      icon: <UserOutlined />,
      label: item,
      onClick: () => {
        dispatch(setCurrentView(item))
        navigate(`/${item.toLowerCase()}`)
    }
    };
  });


  return (
    <>
      <div>
        <Sider
          style={{
            // overflow: 'auto',
            // height: '100%',
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
            style={{ width: 250, height: "100vh" }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={sideBarList}
          />
        </Sider>
      </div>
    </>
  );
};
export default SideBar;
