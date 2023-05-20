import { CustomError } from "../../common/Error/CustomError";
import AppLoader from "../../common/Loader";
import { nameSplitter } from "../../utils/utils";
import classes from "./product.module.scss";

function ProductsList({ data, loading, error }) {


  if (loading)
    return (
      <div>
        {" "}
        <AppLoader />{" "}
      </div>
    );

  if (error)
    return (
      <div>
        {" "}
        <CustomError />{" "}
      </div>
    );

  return (
    <div className={classes.productParent}>
      {data?.map(({ id, title, price, image }) => {
        return (
          <div className={classes.singleParent}>
            <span className={classes.title}> {nameSplitter(title)}</span>
            <span className={classes.price}> {price} </span>
            <span>
              <img src={image} className={classes.img} />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsList;
