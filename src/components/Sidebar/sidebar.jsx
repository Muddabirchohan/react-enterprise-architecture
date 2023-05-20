import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import {  Layout, Menu } from 'antd';
  import { useState } from 'react';
  import classes from "./sideBar.module.scss"

  const {  Sider } = Layout;
  const SideBar = () => {
    const [collapsed] = useState(false);

    return (
        <>
        <div >
            <Sider
              style={{ 
                // overflow: 'auto',
                // height: '100%',
                position: 'fixed',
                left: 0,
                top: 60
            }}
            className={`${classes.sidebarParent}`}
            trigger={null} collapsible collapsed={collapsed}>
            <Menu    
                style={{ width: 250 , height: '100vh'}}

                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'Products',
                        
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'Cart',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'Trending',
                    },
                    
                ]} />
        </Sider>
        </div>
      
   </>
    );
  };
  export default SideBar;