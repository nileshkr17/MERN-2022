//product.js
import React, { useContext } from 'react'
import CartContext from '../Store/CartContext'
import './Product.css'

export let Product =(props)=>{
    // let CartItems=[]
    let CartCtx=useContext(CartContext)
    let addToCartHandler=()=>{
        let cartObj={
            productName:props.productName,
            productImage:props.productImage,
            qty:1,
            productPrice:props.productPrice
        }
        let CartItems=[...CartCtx.cartItems]
        CartItems=CartItems.filter(cartitem=>cartitem.productName===props.productName)
        
        if(CartItems.length>0)
        {
            CartItems[0].qty=CartItems[0].qty+1
        }else{
            CartCtx.setCartItems([...CartCtx.cartItems,cartObj])
        }
        console.log(CartCtx.cartItems);
    }
    return(
       

<div className='CartContainer'>
                <div className='ItemName'>{props.productName}</div>
                <div className='ProductImage'>
                    <img src={props.productImage}/>
                </div>
                <div className='ProductRating'>{props.productCreatedBy}</div>
                <div className='ProductPrice'>${props.productPrice}</div>
                <div className='Btn'></div>
                <button className='Source' onClick={addToCartHandler}>Add to Cart</button>
            </div>

    )
} 
