//ProductForm.js
import React, { useState,useContext } from "react";
import './product-form.css';
import axios from 'axios';
import ProductContext from "../Store/ProductContext";
export let ProductForm =(props)=>{
    let ProductCtx= useContext(ProductContext)
    let [resMsg,setResMsg]= useState('')
    let [resAddMsg,setResAddMsg]= useState('')

    
    let [formInput,setformInput]= useState({
        productName:'',
        productPrice:'',
        productImage:'',
        productCreatedBy:''
    })

    let productNameHandler=(event)=>{
        setformInput({
            ...formInput,
            productName:event.target.value
        })
        

    }
    let productPriceHandler=(event)=>{
        setformInput({
            ...formInput,
            productPrice:event.target.value
        })

    }
    let productImageHandler=(event)=>{
        setformInput({
            ...formInput,
            productImage:event.target.value
        })

    }
    let productCreatedByHandler=(event)=>{
        setformInput({
            ...formInput,//updated value preserve this then add
            productCreatedBy:event.target.value
        })

    }

    let formSubmitHandler= async (event)=>{
        let error=''
        if(formInput.productName==='' && error==='')
        {
            error='Please Enter Product Name'
            setResMsg(error)
        }
        else if (formInput.productPrice==='' && error==='')
        {
            error='Please Enter Product Price'
            setResMsg(error)
        }
        else if(formInput.productImage==='' && error==='')
        {
            error='Please Enter Product Image'
            setResMsg(error)
        }
        else if(formInput.productCreatedBy==='' && error==='')
        {
            error='Please Enter Product Creator'
            setResMsg(error)

        }
        else{
            // console.log(formInput);
            saveProductData(formInput)
            // props.onProductAdded(true);
            console.log(`Added to List!!`);
        }
        event.preventDefault()

    }
    const saveProductData= async (formData)=>{
        try{
        let product ={
            _id:formData.id,
            productName:formData.productName,
            productPrice:formData.productPrice,
            productImage:formData.productImage,
            productCreatedBy:formData.productCreatedBy
        }
        
            let result = await axios.post("http://127.0.0.1:4001/product/addProduct",product,{
                headers:{
                    'Content-Type':'application/json',
                    // 'x-auth-token':for protected
                }
            })
            setResAddMsg(result.data.message)
            setResMsg('')
            ProductCtx.setProducts([...ProductCtx.products,product])
        }
        catch(err){
            setResAddMsg('From error',err.message);
        }

    }

    return(
        <div className="form-container">
            
            <h1 className="title" >Add New Product</h1>
            <div>{resMsg}</div>
            <form onSubmit={formSubmitHandler}>
                <div className="form-input">
                    <input type="text" placeholder="Product Name" onChange={productNameHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Product Price"onChange={productPriceHandler}/>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <input type="text" placeholder="Product rel. Image"onChange={productImageHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Brand Name"onChange={productCreatedByHandler}/>
                </div>
                <div className="clearfix"></div>

                <div className="form-input">
                    <button className="btn btn-secondary">Add to the product list</button>
                </div>
                <div className="clearfix"></div>
                

            </form>
            <div>{resAddMsg}</div>
        </div>
    )
}

