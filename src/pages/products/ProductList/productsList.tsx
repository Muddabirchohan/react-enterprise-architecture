import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishLists,
  removeFromWishlist,
  setSingleProduct,
} from "../../../features/productSlice";
import { itemExistArr, nameSplitter } from "../../../utils/utils";
import classes from "./../product.module.scss";
import { Button, Col, Drawer, Row, Spin } from "antd";
import { MouseEvent, RefAttributes, useState } from "react";
import { setCurrentView } from "../../../features/sideBarSlice";
import { useNavigate } from "react-router-dom";
import MiniCart from "../../../components/miniCart/miniCart";
import { useDrawerStore } from "../../../store/rootZustand";
import ReactGA from "react-ga";
import { PlusCircleOutlined, HeartTwoTone } from "@ant-design/icons";
import Icon, { HomeOutlined } from "@ant-design/icons";
import Toast from "src/components/Toast/toastContainer";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { JSX } from "react/jsx-runtime";


interface IToast {
  state: boolean;
    message: string;
    type: string;
}


function ProductsList({ data: { id, title, price, image } }) {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  // const [route,setRoute] = UsegenerateProductUrl("")

  const productState = useSelector((state) => state);

  const [renderToast, setRenderToast] = useState<IToast>({
    state: false,
    message: "",
    type: "",
  });

  const [counter,setCounter] = useState<number>(0)

  const navigate = useNavigate();


  // const [handleProuctClick] = UsegenerateProductUrl("")

  const setDrawer = useDrawerStore((state) => state.setDrawerState);

  const setSingle = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(setCurrentView(`details`));
    dispatch(setSingleProduct(id));
    navigate(`/products/${id}`);
  };

  const addToCartHandler = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    addTo({ id, title, price, image });
  };

  const addToWishList = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    addToWishListHandler({ id, title, price, image });
  };

  const addToWishListHandler = ({ id, title, price, image }) => {
    if (itemExistArr(id, productState.productReducer.wishlist)) {
      dispatch(removeFromWishlist({ id }));

      setTimeout(() => {
        setLoader(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setLoader(false);
        dispatch(addToWishLists({ id, title, price, image }));

        setRenderToast((prevState) => ({
          ...prevState,
          state: true,
          message: "added to wishlist",
          type: "success",
        }));
      }, 1000);

      setTimeout(() => {
        setRenderToast((prevState) => ({
          ...prevState,
          state: false,
        }));
      }, 3000);
    }
  };

  const addTo = ({ id, title, price, image }) => {

    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);

    setLoader(true);
    if (itemExistArr(id, productState.productReducer.cart)) {
      setRenderToast((prevState) => ({
        ...prevState,
        state: true,
        message: "already exist",
        type: "warning",
      }));

      setTimeout(() => {
        setLoader(false);
        setRenderToast((prevState) => ({
          ...prevState,
          state: false,
        }));
      }, 1000);
    } else {
      setTimeout(() => {
        setLoader(false);
        dispatch(addToCart({ id, title, price, image }));
        setRenderToast((prevState) => ({
          ...prevState,
          state: true,
          message: "item added to cart",
          type: "success",
        }));
        setDrawer();
      }, 1000);

      setTimeout(() => {
        setDrawer();
        setRenderToast((prevState) => ({
          ...prevState,
          state: false,
        }));
      }, 3000);
    }
  };

  const isInWishlist = productState?.productReducer?.wishlist?.find(
    (item: { id: any; }) => item.id === id
  );

  const HeartSvg = () => (
    <svg width="2em" height="2em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
  );

  const HeartIcon = (props: JSX.IntrinsicAttributes & Pick<IconComponentProps, "data" | "id" | "title" | "type" | "size" | "cite" | "form" | "label" | "slot" | "span" | "style" | "summary" | "pattern" | "color" | "shape" | "children" | "start" | "hidden" | "content" | "default" | "wrap" | "open" | "height" | "rotate" | "translate" | "width" | "multiple" | "disabled" | "key" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "crossOrigin" | "dateTime" | "defer" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "muted" | "name" | "noValidate" | "optimum" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoFocus" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "target" | "viewBox" | "playsInline" | "poster" | "preload" | "readOnly" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "step" | "useMap" | "value" | "wmode" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "spin" | "component" | "ariaLabel"> & RefAttributes<HTMLSpanElement>) => <Icon component={HeartSvg} {...props} />;


    console.log("counter",counter)

  return (
    <div>


{/* <p className="text-sm font-medium text-gray-500">team</p> */}



      {renderToast.state && (
        <Toast  
          message={renderToast.message}
          type={renderToast.type}
          duration={3000}
        />
      )}

      <div className={classes.singleParent} onClick={(e) => setSingle(e)}>
        <span>
          <Row gutter={6}>
            <Col className="gutter-row" span={4} pull={22}>
              {loader ? (
                <Spin />
              ) : (
                <PlusCircleOutlined
                  style={{ fontSize: 24, color: "#72baff" }}
                  onClick={addToCartHandler}
                />
              )}
            </Col>

            <Col className="gutter-row" span={4} push={22}>
              {isInWishlist ? (
                <HeartIcon
                  style={{
                    color: "hotpink",
                  }}
                  onClick={addToWishList}
                />
              ) : (
                <HeartTwoTone
                  twoToneColor="#eb2f96"
                  style={{ fontSize: 24 }}
                  onClick={addToWishList}
                />
              )}
            </Col>
          </Row>
        </span>
        <span className={classes.title} > {nameSplitter(title, 45)}</span>
        <span className={classes.price}> {price} /$ </span>
        <span>
          {/* <Product3DViewer productImage={image}/> */}
          <img src={image} className={classes.img} />
        </span>
      </div>
      {/* {drawer && <MiniCart />} */}
    </div>
  );
}

export default ProductsList;
