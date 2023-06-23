import React from "react";

import classes from "./banner.module.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Banner() {

    const navigate = useNavigate()

    const gotoProducts = () => {
        navigate("/products")
    }


  return (
    <>
      <div className={classes.bannerParent}>
        <div className={classes.topSection}>
          <div className={classes.heroImage}></div>
          <div className={classes.heroText}>
            <h1>Grab upto 50% off</h1>
            <h3>on selected Headphones</h3>
            <Button type="primary" onClick={gotoProducts}>Buy Now</Button>
          </div>
        </div>

        <div className={classes.men}>
          <h3 className={classes.title}> Men's Wear</h3>
          <div className={classes.midContent}></div>
        </div>
        <div className={classes.women}>
          <h3 className={classes.title}> Women's Wear</h3>

          <div className={classes.lowerMidContent}></div>
        </div>

        <div className={classes.kid}>
          <h3 className={classes.title}> kid's Wear</h3>

          <div className={classes.kidContent}></div>
        </div>


      </div>
    </>
  );
}
