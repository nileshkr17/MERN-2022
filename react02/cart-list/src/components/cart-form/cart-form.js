import React,{ useState } from "react";
import './form.css';
export const CartForm = ()=>{
    // const [productName,setProductName] = useState('');
    // const [productPrice,setProductPrice] = useState('');
    // const [productImage,setProductImage] = useState('');
    // const [productRating,setProductRating] = useState('');



 const [formInput,setFormInput] = useState({
        productName:'',
        productPrice:'',
        productImage:'',
        productRating:''
 })
    const ProductNameHandler = (event)=>{
        
            setFormInput({
                ...formInput,
                productName:event.target.value
            });
    }
    const ProductPriceHandler = (event)=>{
        setFormInput({
            ...formInput, //lost values to undefined
            productPrice:event.target.value
        });
    }
    const ProductImageHandler = (event)=>{
        setFormInput({
            ...formInput,
            productImage:event.target.value
        });

    }
    const ProductRatingHandler = (event)=>{
        setFormInput({
            ...formInput,
            productRating:event.target.value
        });
    }
    console.log(`product name: ${formInput.productName} product price: ${formInput.productPrice} product image: ${formInput.productImage} product rating: ${formInput.productRating}`);
    return(
        <div className='FormCont'>
            <h2>Add New Movies</h2>
            <form>
                <div className='input'>
                    <input type="text" placeholder='Movie/series' onChange={ProductNameHandler}/>

                </div>
                <div className='input'>
                    <input type="text" placeholder='Price' onChange={ProductPriceHandler}/>
                    
                </div>
                <div className='input'>
                    <input type="text" placeholder='Image' onChange={ProductImageHandler}/>
                    
                </div>
                <div className='input'>
                    <input type="text" placeholder='Rating' onChange={ProductRatingHandler}/>
                    
                </div>
                <div className='input'>
                    <button className='btn-add'>Add Item</button>
                </div>
            </form>
        
        </div>
    )
}
//onchange
//onclick
