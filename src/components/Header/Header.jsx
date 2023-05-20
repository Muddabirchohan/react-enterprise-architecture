import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ width: '100%', position: 'fixed', top: 0,right: 0, zIndex: 1 }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Option 3
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;