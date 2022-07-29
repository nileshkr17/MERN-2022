//LoginForm.js
import React,{useState,useContext} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../Store/Auth/AuthContext'
import './Login.css'
export const LoginForm = (props) => {
    let AuthCtx=useContext(AuthContext)
    let navigate=useNavigate()
    let [errMsg,setErrMsg]=useState()
    let [user,setuser]= useState({
        email:'',
        password:''
    })

    let emailHandler=(event)=>{
        setuser({
            ...user,
            email:event.target.value
        })
        

    }
    let passwordHandler=(event)=>{
        setuser({
            ...user,
            password:event.target.value
        })

    }
    let formLoginHandler= async (event)=>{
        // let error=''
        
        event.preventDefault();

        axios.post('http://localhost:4001/user/login',user,{
            headers:{
                'Content-Type':'application/json'

            }
        }).then(response=>{
            // localStorage.setItem('user',response.data.user)
            // localStorage.setItem('token',response.data.token)
            AuthCtx.setIsLoggedIn(true);

            navigate('/admin/product/edit')
            console.log(`Login Done!!`);

        })
        .catch(error=>{
         setErrMsg(error.response.data.message)
            console.log(error);

        })
    }
    
    
  return (
   
    <div class="container1">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="form-wrapper">
            <h4>Admin Login</h4>
            <form onSubmit={formLoginHandler}>
                <label class="label" for="Username">Username</label>
                <input class="input-form" type="email" placeholder="Email" onChange={emailHandler} required/> 
                
                <label class="label" for="Password">Password</label>
                <input class="input-form" type="password" placeholder="Password" onChange={passwordHandler}  required/>
                {errMsg!==''&&
                <div className='alert alert danger'>
                    <h7>
                    {errMsg}<br/>Don't have a account?<Link to='/admin/register'>,click!</Link></h7></div>
                }
               
            <button type="submit" class="btn-submit">Submit</button>

            </form>
            </div>
    </div>

  )
}
