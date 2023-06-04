import React, { useRef } from "react";
import classes from "./customSuccess.module.scss";
import SuccessScreen from "./../../assets/success/tick.jpg"

export const CustomSuccess = (props) => {

    const useUniqueId = () => {
        const idRef = useRef();
      
        if (!idRef.current) {
          idRef.current = Math.random().toString(36).substr(2, 9);
        }
      
        return idRef.current;
      };


      const trackId = useUniqueId();
      
  return (
    <div className={classes.successParent}>
              <p className={classes.title}> You'r Order has been fullfilled followig is the tracking Id for the order </p>
        <span> {trackId} </span>
      <img src={SuccessScreen} className={classes.img} /> 
    </div>
  );
};
