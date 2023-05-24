import { useDispatch, useSelector } from "react-redux";
import { CustomError } from "../../common/Error/CustomError";
import AppLoader from "../../common/Loader";
import { addToCart } from "../../features/productSlice";
import { itemExistArr, nameSplitter } from "../../utils/utils";
import classes from "./product.module.scss";
import { Button } from "antd";

function ProductsList({ data: { id, title, price, image } }) {
  const dispatch = useDispatch();

  const productState = useSelector((state) => state);

  const addTo = ({ id, title, price, image }) => {
    if (itemExistArr(id, productState)) {
      return;
    }
    dispatch(addToCart({ id, title, price, image }));
  };

  return (
    <div className={classes.singleParent}>
      <span>
        {" "}
        <Button
        className={classes.button}
          style={{ backgroundColor: "#001529", color: "white" ,width: "200px" , fontWeight: 700}}
          onClick={() => addTo({ id, title, price, image })}
        >
          {" "}
          Add{" "}
        </Button>
      </span>
      <span className={classes.title}> {nameSplitter(title)}</span>
      <span className={classes.price}> {price} /$ </span>
      <span>
        <img src={image} className={classes.img} />
      </span>
    </div>
  );
}

export default ProductsList;
