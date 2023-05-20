import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 34,
      color: "Red"
    }}
    
    spin
  />
);
const AppLoader = () => (
  <Spin
    style={{ display: "grid", justifyContent: "center",alignItems : "center",marginTop: 350}}
    indicator={antIcon}
  />
);
export default AppLoader;
