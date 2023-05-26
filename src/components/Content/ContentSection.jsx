import React from 'react'
import Products from '../../pages/products/products';
import Cart from '../../pages/cart/cart';
import ProductDetail from '../../pages/products/ProductDetail/productDetail';

export default function ContentSection({type}) {


    const renderContent = () => {
    
        switch (type) {
            case "Products":
                return <Products/>

            case "details":
                    return <ProductDetail/>

            case "Cart":
                return <Cart/>
            default:
                break;
        }
    } 


  return (
    <div>{renderContent()}</div>
  )
}
