import React from 'react'
import Products from '../../pages/products/products';
import Cart from '../../pages/cart/cart';
import ProductDetail from '../../pages/products/ProductDetail/productDetail';
import Checkout from '../../pages/checkout/Checkout';

export default function ContentSection({type}) {


    const renderContent = () => {
    
        switch (type) {
            case "Products":
                return <Products/>

            case "details":
                    return <ProductDetail/>

            case "Cart":
                return <Cart />
            
            case "checkout":
                return <Checkout/>

            default:
                break;
        }
    } 


  return (
    <div>{renderContent()}</div>
  )
}
