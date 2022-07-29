//CartState.js
import React ,{useState}from 'react'
import CartContext from './CartContext'

export const CartState = (props) => {

    let [cartItems,setCartItems]=useState([])

  return (
    <CartContext.Provider value={{cartItems,setCartItems}}>
        {props.children}
    </CartContext.Provider>
  )
}
