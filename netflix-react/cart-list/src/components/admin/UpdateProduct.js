//ProductForm.js
import React, { useState,useContext } from "react";
import '../productForm/product-form.css';
import EditContext from "../Store/EditContext";
import axios from 'axios';
export let UpdateForm =(props)=>{
    let EditCtx= useContext(EditContext)
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
        console.log(`Added to List!!`);
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
            editProductData(formInput)
            // props.onProductAdded(true);
            console.log(`Added to List!!`);
        }
        event.preventDefault()

    }
    const editProductData= async (formData)=>{
        try{
        let product ={
            productName:formData.productName,
            productPrice:formData.productPrice,
            productImage:formData.productImage,
            productCreatedBy:formData.productCreatedBy
        }
        
        const url="http://127.0.0.1:4001/product/update/"+EditCtx.edit
            let result = await axios.put(url,product,{
                headers:{
                    'Content-Type':'application/json',
                    // 'x-auth-token':for protected
                }
            })
            setResAddMsg(result.data.message)
            setResMsg('')
            // EditCtx.setProducts([...EditCtx.products,product])
        }
        catch(err){
            console.log('From error',err.message);
        }

    }

    return(
        <div className="form-container">
            
            <h1 className="title" >Update Product Description</h1>
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
                    <input type="text" placeholder="Product Image"onChange={productImageHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Product Created By"onChange={productCreatedByHandler}/>
                </div>
                <div className="clearfix"></div>

                <div className="form-input">
                    <button className="btn btn-secondary">Update</button>
                </div>
                <div className="clearfix"></div>
                

            </form>
            <div>{resAddMsg}</div>
        </div>
    )
}

