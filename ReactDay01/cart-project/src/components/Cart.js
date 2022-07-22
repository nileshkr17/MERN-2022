import React  from "react";
import './Cart.css';
export const Cart = ()=>{
      
            const cart ={
                ProductName:"Laptop",
                ProductImg:"https://www.rlogical.com/wp-content/uploads/2020/12/MERN-Stack-considered-the-Best-for-Developing-Web-Apps.png",
                ProductPrice:'10',
                ItemCompany:'Mac Book Pro M1'

                    }
    return(
    <div>
         <div className='CartContainer'>
            <div className='CartTitle'>{cart.ProductName}</div>
            <div className='CartImg'>
                <img src={cart.ProductImg} alt="description of image"/>
            </div>
            <div className='CartPrice'>{cart.ProductPrice}</div>
            <div className='ItemCompany'>{cart.ItemCompany}</div>
            <div className="BuyButtonContainer">
                <button className="BuyNow">Buy Now</button>
               
        </div>
        </div>

     </div>
 )
}
