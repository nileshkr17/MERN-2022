import React,{ useContext, useState }from "react";
import './form.css';
import axios from 'axios';
import CartContext from "../store/CartContext";
export const CartForm = (props)=>{
let CartCtx = useContext(CartContext)
let [resMsg,setResMsg]=useState('');
//why intial state is blank
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
    const formSubHandler=async(event)=>{
        let err=''
        if(formInput.ProductName===''&& err==='')
        {
            err='Enter the name then press enter';
            setResMsg(err)
        }
        
       else if(formInput.ProductPrice===''&& err==='')
       {
            err='Enter the Price then press enter';
            setResMsg(err)
        }

       else if(formInput.ProductImage===''&& err===''){
            err='Enter the Image then press enter';
            setResMsg(err)
        }
      
       else if(formInput.ProductRating===''&& err===''){
            err='Enter the rating then press enter';
            setResMsg(err)
        }
        else{
            saveCartData(formInput);
           console.log(`Added to List`);
          
        }
        event.preventDefault();
        

    }
    
    const saveCartData = async(formData) =>{
     try{

        let cart = {
            ProductName: formData.ProductName,
            ProductImage: formData.ProductImage,
            ProductPrice: formData.ProductPrice,
            ProductRating:formData.ProductRating
        }
        const result = await axios.post("http://localhost:4001/cart/add",cart,{
            headers:{
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
                //  x-auth-token:
            }
        })
        console(result.data.message);
        CartCtx.setCarts([...CartCtx.cartItem,cart])
    }
        catch(err){
            console.log('From error',err.message);
        }
      
    }
    return(
        <div className='FormCont'>
            <h2>Add New Movies</h2>
            <div>{resMsg}</div>
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
