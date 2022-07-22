import React from 'react';
import './cart.css';
 export const Cart = ()=>{
    return(
        <div>
            <body>
            <div className='CartContainer'>
                <div className='ItemName'>Happiness</div>
                <div className='ProductImage'>
                    <img src='https://i.pinimg.com/736x/61/96/12/6196129834dedd3ace510d49e6a8f0a8.jpg'/>
                </div>
                <div className='ProductPrice'>$10</div>
                <div className='Source'>Link</div>
            </div>
            </body>
       </div>
    )
 }