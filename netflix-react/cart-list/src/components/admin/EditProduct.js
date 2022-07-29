//Editproduct.js
import React,{useContext} from 'react'
import './edit.css'
import EditContext from '../Store/EditContext'
import { Link } from 'react-router-dom'
import axios from 'axios'


export let Product =(props)=>{
    let EditCtx=useContext(EditContext)
    let handleEdit=()=>{
        EditCtx.setEdit(props.productId)
    }
    let handleDelete=async ()=>{
        //const url
        const url="http://127.0.0.1:4001/product/delete/"+props.productId
        await axios.delete(url,props.productId,{
            headers:{
                'Content-Type':'application/json',
                // 'x-auth-token':for protected
            }
        })
        //api call
    }

    return(
       
            

            
<div className='CartContainer'>
                <div className='ItemName'>{props.productName}</div>
                <div className='ProductImage'>
                    <img src={props.productImage}/>
                </div>
                <div className='ProductRating'>{props.productCreatedBy}</div>
                <div className='ProductPrice'>${props.productPrice}</div>
                <div className='Btn'></div>
                <Link to='/admin/product/edit/update'><button className='Source' onClick={handleEdit}>Edit</button></Link>
                <button className='Source' onClick={handleDelete} style={{float:'right'}}>Delete</button>

            </div>

    )
    
} 
