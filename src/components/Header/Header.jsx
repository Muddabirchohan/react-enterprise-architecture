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
        <Menu.Item key="3" icon={<UploadOutlined />} 
        // onMouseOver={showCart}
         >
          cart 
        </Menu.Item>
        {/* {cartshow &&  */}
        {/* } */}
      </Menu>



    </Header>
  );
};

export default AppHeader;