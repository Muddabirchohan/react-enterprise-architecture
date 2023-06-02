import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Cart from "../../pages/cart/cart";

const MiniCart = () => {


  return (
    <div>
     <Cart type="miniCart"/>
    </div>
  );
};

export default MiniCart