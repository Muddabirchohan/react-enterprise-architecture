import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Button, Layout, Menu, theme } from 'antd';
  import { useState } from 'react';
  import classes from "./sideBar.module.scss"

  const { Header, Sider, Content } = Layout;
  const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
        <div >
            <Sider
            className={`${classes.sidebarParent}`}
            height={100}
            trigger={null} collapsible collapsed={collapsed}>
            <Menu    
                style={{ width: 280 , height: '100vh'}}

                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'nav 1',
                        
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                    
                ]} />
        </Sider>
        </div>
      
   </>
    );
  };
  export default SideBar;