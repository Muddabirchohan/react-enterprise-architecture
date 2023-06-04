import React, { useEffect } from 'react'
import Products from '../../pages/products/products';
import Cart from '../../pages/cart/cart';
import ProductDetail from '../../pages/products/ProductDetail/productDetail';
import Checkout from '../../pages/checkout/Checkout';
import Order from '../../pages/order/order';
import { useNavigate } from 'react-router-dom';

export default function ContentSection({type}) {


   const navigate = useNavigate() 
    
useEffect(()=>{

    renderContent(type)
},[navigate])



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

            case "order":
                return <Order/>

            default:
                break;
        }
    } 


  return (
    <div>{renderContent()}</div>
  )
}
