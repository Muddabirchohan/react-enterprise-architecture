import React from "react";
import classes from "./customErr.module.scss";
import ErrScreen from "./../../assets/error/error-screen.png"

export const CustomError = (props) => {
  return (
    <div className={classes.errorParent}>
      <img src={ErrScreen} className={classes.img} /> 
    </div>
  );
};
