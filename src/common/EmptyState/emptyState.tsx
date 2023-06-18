import React from "react";
import classes from "./customEmptyState.module.scss";
import EmptyScreen from "./../../assets/empty/shopping-cart.png"

export const EmptyState = ({msg}) => {
  return (
    <div className={classes.emptyParent}>
      <img src={EmptyScreen} className={classes.img} /> 
      <p className={classes.para}> {msg} </p>
    </div>
  );
};
