import React from 'react';
import './cart.css';

 export const Cart = (props)=>{

    return(
        <div>
            <body>
            <div className='CartContainer'>
                <div className='ItemName'>{props.ProductName}</div>
                <div className='ProductImage'>
                    <img src={props.ProductImage}/>
                </div>
                <div className='ProductRating'>{props.ProductRating}</div>
                <div className='ProductPrice'>${props.ProductPrice}</div>
                <div className='Btn'></div>
                <button className='Source'>Link</button>
            </div>
            </body>
       </div> 
    )
    }