import React from "react";
import classes from "./customEmptyState.module.scss";

export const EmptyState = ({msg,image}) => {
  return (
    <div className={classes.emptyParent}>
      <img src={image} className={classes.img} /> 
      <p className={classes.para}> {msg} </p>
    </div>
  );
};
