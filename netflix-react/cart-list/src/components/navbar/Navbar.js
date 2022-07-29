//Navbar.js
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Store/Auth/AuthContext";
import CartContext from "../Store/CartContext";
import './navbar.css'
export let Navbar=(props)=>{
    let AuthCtx=useContext(AuthContext)
    let CartCtx = useContext(CartContext)
    let navigate= useNavigate()
    let [noOfItems,setNoOfItems]=useState(0)
    useEffect(()=>{
        setNoOfItems(CartCtx.cartItems.length)
    },[CartCtx.cartItems])

    let handleLogOut=()=>{
        
        AuthCtx.setIsLoggedIn(false);
        navigate('/admin/login')
    }
    return(
        // 
        <nav className="navbar navbar-expand-lg bg-grey fixed-top navbar-dark"> 
            <div className="container-fluid navbar-fixed-top">
                <Link className="nav-link active" aria-current="page" to="/"><img  className='logo' src='https://img.freepik.com/free-vector/organic-supermarket-business-company-logo_23-2148462396.jpg?w=740&t=st=1659074329~exp=1659074929~hmac=4b33e6e7227dda9981a50e7ebf72b7671f0b4e0b158dcdca03177ee89a7ee4db' alt={'LOGO'}/></Link>
                
                <div className="navbar-nav" >
                
                    <Link className="nav-link mx-4 " aria-current="page" to="/">Home</Link>
                    { !(AuthCtx.isLoggedIn) ? <Link className="nav-link " aria-current="page" to="/admin/login">Login</Link> :
                    <a className="nav-link" aria-current="page" onClick={handleLogOut}>Logout</a>
                    }

                    <Link className="nav-link mx-1 " aria-current="page" to="/admin/register">Register</Link>

                    <Link className="nav-link " aria-current="page" to="/admin/product/add">Add Product</Link>

                    <Link className="nav-link " aria-current="page" to="/admin/product/edit">Products</Link>
                   
                </div>
                <Link className="nav-link active" aria-current="page" to="/product/cart">
                        <div className="shopping-cart">
                            <img className="cart" src='https://endlessicons.com/wp-content/uploads/2012/11/shopping-cart-icon-614x460.png' alt={'CART'}/>
                            <div className="number">{noOfItems}</div>
                        </div>
                    </Link>
            </div>
        </nav>
    
    )
}
/**/ 
