import React from 'react';
import './form.css'
export const CartForm = ()=>{
    return(
        <div className='FormCont'>
            <form>
                <div className='input'>
                    <input type="text" placeholder='Movie/series'/>

                </div>
                <div className='input'>
                    <input type="text" placeholder='Price'/>
                    
                </div>
                <div className='input'>
                    <input type="text" placeholder='Image'/>
                    
                </div>
                <div className='input'>
                    <input type="text" placeholder='Rating'/>
                    
                </div>
                <div className='input'>
                    <button className='btn-add'>Add Item</button>
                </div>
            </form>
        
        </div>
    )
}
