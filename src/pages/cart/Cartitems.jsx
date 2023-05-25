import { CustomError } from "../../common/Error/CustomError";
import AppLoader from "../../common/Loader";
import { nameSplitter } from "../../utils/utils";
import classes from "./cartItems.module.scss";

function CartItems({ data, error }) {

    const {title,price,image} = data

  if (error)
    return (
      <div>
        <CustomError />{" "}
      </div>
    );

  return (
    <div className={classes.singleParent}>
    <span> {nameSplitter(title)}</span>
      <span> {price} </span>
      <span>
        <img src={image} className={classes.img}  />
      </span>
    </div>
  );
}

export default CartItems;
