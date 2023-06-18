import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Cart from "../../pages/cart/cart";
import { Drawer } from "antd";
import ProgressBarComp from "./../../common/Bar/progressBar"

const MiniCart = () => {


  return (
    <div>

     <Cart type="miniCart"/>
    </div>
  );
};

export default MiniCart