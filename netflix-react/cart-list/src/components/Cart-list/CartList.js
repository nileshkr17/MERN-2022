import React, { useContext, useEffect } from 'react'
import { Cart } from '../cart/Cart'
import CartContext from '../store/CartContext'


export const CartList = (props) => {
  let CartCtx = useContext(CartContext)
  useEffect(()=>{
    getCarts();
  },[CartCtx.cartItem])
  const getCarts = async() =>{
    const data = await fetch('http://localhost:4001/cart/');
    const cart_data = await data.json();

    CartCtx.setCarts(cart_data.cartItem);
  } 
  return (
    <div>
       <h2>Cart List</h2>
      {CartCtx.cartItem.map((cart,index)=>
      <Cart key={index} ProductName={cart.ProductName}
       ProductImage={cart.ProductImage} 
       ProductPrice={cart.ProductPrice} 
       ProductRating={cart.ProductRating}/>)
      }
    </div>
   
  )
}
