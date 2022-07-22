import React  from "react";
import './Cart.css';
export const Cart = (props)=>{
      
            const cart ={
                ProductName:"Laptop",
                ProductImg:"https://photos5.appleinsider.com/gallery/48932-95693-M2-MacBook-Air-display-xl.jpg",
                ProductPrice:'10',
                ItemCompany:'Mac Book Pro M1'
            }
    return(
    <div>


         <div className='CartContainer'>
            <div className='CartTitle'>{props.ProductName}</div>
            <div className='CartImg'>
                <img src={props.ProductImg} alt="description of image"/>
            </div>
            <div className='CartPrice'>{props.ProductPrice}</div>
            <div className='ItemCompany'>{props.ItemCompany}</div>
            <div className="BuyButtonContainer">
                <button className="BuyNow">Buy Now</button>
               
        </div>
        </div>

     </div>
 )
}
