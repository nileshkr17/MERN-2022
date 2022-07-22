import React  from "react";
import './cart.css';
export const Cart = ()=>{
    return(
    <div>
         <div className='CartContainer'>
            <div className='CartTitle'>Cart Item</div>
            <div className='CartImg'>
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-silver-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1633027804000"alt="description of image"/>
            </div>
            <div className='CartPrice'>100rs</div>
            <div className='ItemCompany'>Mac Book Pro M1</div>
        </div>

     </div>
 )
}
