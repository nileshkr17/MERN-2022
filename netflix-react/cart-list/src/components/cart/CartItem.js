//CartItem.js
import React,{useContext}from 'react'
import CartContext from '../Store/CartContext'
import './CartItem.css'

export const CartItem = (props) => {
    let CartCtx = useContext(CartContext)
    let handleIncrease=()=>{
        let CartItems=[...CartCtx.cartItems]
        CartItems=CartItems.filter(cartitem=>cartitem.productName===props.productName)
        CartItems[0].qty=CartItems[0].qty+1
        CartCtx.setCartItems([...CartCtx.cartItems])

    }
    let handleDecrease=()=>{
        let CartItems=[...CartCtx.cartItems]
        CartItems=CartItems.filter(cartitem=>cartitem.productName===props.productName)
        if(CartItems[0].qty>0){
            CartItems[0].qty=CartItems[0].qty-1
        }
        else{

        }
        CartCtx.setCartItems([...CartCtx.cartItems])

    }
    
  return (
    <div className='row' id='cart'>
        <div className='col' ><img  id='image' src={props.productImage} alt=''></img></div>

        <div className='col' id='name'>{props.productName}</div>
        <div className='col' >
            <div className='row'>
                <div className='col' ><button className='plus' onClick={handleIncrease}>+</button></div>
                <div className='col' > <form className='form'>
                        <input type='text' value={props.qty} readOnly ></input>
                    </form></div> <div className='col' > <button className='plus' onClick={handleDecrease}>-</button></div>
            </div>
        </div>
        <div className='col' id='price'>Rs.{props.productPrice*props.qty}</div>

    </div>
  )
}
