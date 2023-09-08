import { Divider, Space, Tag } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCat } from "src/features/productSlice";



interface MyComponentProps {
  categories: string[]; // Define the type for the categories prop
}

const CategoryTag: React.FC<MyComponentProps> = ({ categories }) => {



    const dispatch = useDispatch()

    const productState:any = useSelector((state) => state);


    const filterProducts = (category:String) => {
        dispatch(setCat(category.toLowerCase()));
    }




    return(
        <div style={{display: "flex", justifyContent:"center"}}>
        {categories.map((item,index) => {
          return(
          <Tag style={{fontSize: 14,height: 26,color: "silver"}}  bordered={true} color={productState.productReducer.category === item && "red"} onClick={() => filterProducts(item)}>
              {item}
            </Tag>)
          })}
        </div>
    )
}


export default CategoryTag;
