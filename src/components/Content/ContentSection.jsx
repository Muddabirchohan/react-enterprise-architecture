import React from 'react'
import Products from '../../pages/products/products';
import Cart from '../../pages/cart/cart';

export default function ContentSection({type}) {


    const renderContent = () => {
    
        switch (type) {
            case "Products":
                return <Products/>
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
