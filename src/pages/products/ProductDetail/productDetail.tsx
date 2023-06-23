import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/productSlice";
import { itemExistArr, nameSplitter } from "../../../utils/utils";
import { Button, Col, Drawer, Rate, Row, Spin } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import classes from "./productDetail.module.scss";
import Product3DViewer from "../../../components/3d/Product3d";
import useProduct, { useProductSingle } from "../product.logic";
import { useParams } from "react-router-dom";
import AppLoader from "src/common/Loader/Loader";
import { CustomError } from "src/common/Error/CustomError";

function ProductDetail() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [sizeGuide, setSizeGuide] = useState(false);
  const params = useParams();
  const data = useProductSingle(params.id);

  const productState = useSelector((state) => state);

  const addTo = ({ id, title, price, image }) => {
    setLoader(true);
    if (itemExistArr(id, productState.productReducer.cart)) {
      toast.warn("already exist", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        setLoader(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setLoader(false);
        dispatch(addToCart({ id, title, price, image }));
        toast.success(`item ${title} added to cart`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }, 1000);
    }
  };

  if (!data) {
    return;
  }

  if (data.loadingSingle)
    return (
      <div>
        {" "}
        <AppLoader />
      </div>
    );

  if (data.errorSingle)
    return (
      <div>
        {" "}
        <CustomError />
      </div>
    );

  const {
    singleProduct: { image, id, title, description, price },
  } = data;

  return (
    <div className={classes.productDetailParent}>
      <Row>
        <Col className="gutter-row" span={14} offset={2}>
          <Rate
            allowHalf
            disabled
            defaultValue={data.singleProduct.rating.rate}
            style={{
              paddingBottom: 40,
              display: "flex",
              marginLeft: "60px"
            }}
          />

          <div>
            {" "}
            <img src={image} className={classes.img} />
          </div>
        </Col>

        <Col span={8} pull={4}>
          <div className={classes.detailSection}>
            {" "}
            <p className={classes.title}>
              <span className={classes.name}>{nameSplitter(title, 100)}</span>
              <span className={classes.price}>{price} $</span>
            </p>
            <p className={classes.detail}> {description} </p>
            {/* <p className={classes.price}> {price} /$ </p> */}
            <Button
              style={{
                width: "330px",
                fontWeight: 700,
                marginBottom: 20,
              }}
              // className={classes.button}
              // type="primary"
              onClick={() => setSizeGuide(true)}
            >
              Size Guide{" "}
            </Button>
            <Button
              className={classes.button}
              style={{
                backgroundColor: "#001529",
                color: "white",
                width: "200px",
                fontWeight: 700,
              }}
              onClick={() => addTo({ id, title, price, image })}
            >
              {loader && <Spin />} Add{" "}
            </Button>
          </div>
        </Col>
      </Row>

      <Drawer
        title="additional info (size guide)"
        placement={"right"}
        width={500}
        onClose={() => setSizeGuide(false)}
        open={sizeGuide}
      >
        <h3>Size Guide</h3>
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Measurements</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Small</td>
              <td>32-34 inches (81-86 cm)</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>36-38 inches (91-97 cm)</td>
            </tr>
            <tr>
              <td>Large</td>
              <td>40-42 inches (102-107 cm)</td>
            </tr>
            <tr>
              <td>X-Large</td>
              <td>44-46 inches (112-117 cm)</td>
            </tr>
            <tr>
              <td>XX-Large</td>
              <td>40-42 inches (102-107 cm)</td>
            </tr>
            <tr>
              <td>XXX-Large</td>
              <td>42-44 inches (107-112 cm)</td>
            </tr>
          </tbody>
        </table>
      </Drawer>
    </div>
  );
}

export default ProductDetail;
