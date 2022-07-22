import React  from "react";
import './Cart.css';
export const Cart = ()=>{
    return(
    <div>
         <div className='CartContainer'>
            <div className='CartTitle'>Cart Item</div>
            <div className='CartImg'>
                <img src="https://www.rlogical.com/wp-content/uploads/2020/12/MERN-Stack-considered-the-Best-for-Developing-Web-Apps.png" alt="description of image"/>
            </div>
            <div className='CartPrice'>100rs</div>
            <div className='ItemCompany'>Mac Book Pro M1</div>
        </div>

     </div>
 )
}
