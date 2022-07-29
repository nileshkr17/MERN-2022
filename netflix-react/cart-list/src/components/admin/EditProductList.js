//EditProductList.js
import React,{useContext,useEffect} from 'react';
import {Product} from './EditProduct'
import ProductContext from '../Store/ProductContext';

export const EditProductList = () => {
  let ProductCtx= useContext(ProductContext)
    useEffect(()=>{
        getProduct();
    },[ProductCtx.products])
    let getProduct=async ()=>{
        let data= await fetch('http://127.0.0.1:4001/product/')
        let products_data= await data.json()
       
        // console.log(products_data);
        ProductCtx.setProducts(products_data.products)
      }
  return (
    <div>  
        <h2>Product List</h2>
        <div className='row row-cols-1 row-cols-md-5 g-4'>
        {ProductCtx.products.map((product,index)=>
          <Product key={index} productId={product._id} productName={product.productName} productPrice={product.productPrice} productImage={product.productImage} productCreatedBy={product.productCreatedBy}/> )}
        </div>
    </div>
  )
}
