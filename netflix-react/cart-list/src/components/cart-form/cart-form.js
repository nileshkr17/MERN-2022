import React,{ useState }from "react";
import './form.css';
export const CartForm = (props)=>{
    // const [productName,setProductName] = useState('');
    // const [productPrice,setProductPrice] = useState('');
    // const [productImage,setProductImage] = useState('');
    // const [productRating,setProductRating] = useState('');


 const [formInput,setFormInput] = useState({
        ProductName:'',
        ProductPrice:'',
        ProductImage:'',
        ProductRating:''
 })
    const ProductNameHandler = (event)=>{
        
            setFormInput({
                ...formInput,
                ProductName:event.target.value
            });
    }
    const ProductPriceHandler = (event)=>{
        setFormInput({
            ...formInput, //lost values to undefined
            ProductPrice:event.target.value
        });
    }
    const ProductImageHandler = (event)=>{
        setFormInput({
            ...formInput,
            ProductImage:event.target.value
        });

    }
    const ProductRatingHandler = (event)=>{
        setFormInput({
            ...formInput,
            ProductRating:event.target.value
        });
    }
    const formSubHandler=(event)=>{
        let err=''
        if(formInput.ProductName===''&& err===''){
            err='Enter the name then press enter';
            console.log(err);
        }
        console.log(formInput);
        props.OnNewItem(formInput);
        event.preventDefault();
    }
    
    
    return(
        <div className='FormCont'>
            <h2>Add New Movies</h2>
            <form onSubmit={formSubHandler}>
                <div className='input'>
                    <input type="text" placeholder='Name' onChange={ProductNameHandler}/>

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
