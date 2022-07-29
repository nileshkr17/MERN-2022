//Cart.js
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../Store/CartContext'
import { CartItem } from './CartItem'
import './Cart.css'

export const Cart = (props) => {
    let CartCtx = useContext(CartContext)
    // useEffect()
    let handleRemove=()=>{
        let CartItems=[...CartCtx.cartItems]
        CartItems=CartItems.filter(cartitem=>cartitem.productName===props.productName)
        CartCtx.setCartItems([])
     }
    //  let Total=0;
  return (
    <div className='container' >
        <h2>Shopping Cart</h2>
        {CartCtx.cartItems.length?
        <div className='cart-box m-4'><div>
            {CartCtx.cartItems.map((item,index)=>
            <CartItem productName={item.productName} productPrice={item.productPrice} productImage={item.productImage} qty={item.qty} key={index}/>
            )}
            </div>
            <div ><button className='btn btn-warning' onClick={handleRemove}>Empty the Cart</button></div>
            <br/>
            <div ><button className='btn btn-success' onClick={handleRemove}>Proceed</button></div>
            
        </div>
        :
        <div>
            <div class="alert alert-success">
                Nothing in the cart!..<br/>
            </div>
            <Link to={'/'}><button className='btn btn-outline-secondary btn-sm'>Add Now</button></Link>
        </div>}
    </div>
  )
}
