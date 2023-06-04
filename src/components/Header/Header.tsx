import React, { useState } from 'react';
import { Drawer, Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import MiniCart from '../miniCart/miniCart';

const { Header } = Layout;

const AppHeader = () => {


    // const [cartshow,setCartShow] = useState(false);

    // const showCart = () => {
    //     setCartShow(!cartshow)
    // }

    



  return (
    <Header style={{ width: '100%', position: 'fixed', top: 0,right: 0, zIndex: 1 }}>
      <div className="logo" />




    </Header>
  );
};

export default AppHeader;