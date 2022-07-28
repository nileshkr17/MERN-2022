import React, { useState } from "react";
import CartContext from "./CartContext";
export const CartState = (props)=>{
    const [cartItem,setCarts] = useState([])
    return(
        <CartContext.Provider value={{cartItem,setCarts}}>
            {props.children}
        </CartContext.Provider>
    )
}