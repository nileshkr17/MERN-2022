//RegisterForm.js
import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import './res.css'

export const RegisterForm = () => {
  let navigate=useNavigate()
  let cpassword=''
    const[err,setErr]= useState({
        isError: false,
        message: '',
    })
    let [errMsg,setErrMsg]=useState()
    let [user,setuser]= useState({
      fullName:'',
      email:'',
      password:''
    })

    let nameHandler=(event)=>{
      setuser({
          ...user,
          fullName:event.target.value
      })
      
  }

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
    let cnfPassswordHandler=(event)=>{
      cpassword=event.target.value;
        if(cpassword!==user.password){
          setErr({
                isError: true,
                message: 'Both the password should be same',
            })
    }}
    /**/
    let formLoginHandler=  (event)=>{
        // let error=''
        
        event.preventDefault()

        axios.post('http://127.0.0.1:4001/user/add',user,{
            headers:{
                'Content-Type':'application/json'

            }
        }).then(response=>{

            navigate('/admin/product/edit')
            console.log(`Register Done!!`);

        })
        .catch(error=>{
            setErrMsg(error.response.data.message)
        })
    }


  return (
    

<div class="container1">
<div class="circle1"></div>
<div class="circle2"></div>
<div class="form-wrapper">
    <h4>Admin Registration</h4>
    <form onSubmit={formLoginHandler}>
        <label class="label" for="Username">Full Name</label>
        <input type="name" class="input-form" placeholder="Full Name"  required onChange={nameHandler}></input>

        <label class="label" for="email">Email</label>
        <input class="input-form" type="email" placeholder="Email" onChange={emailHandler} required/> 
        
        <label class="label" for="Password">Password</label>
        <input class="input-form" type="password" placeholder="Password" onChange={passwordHandler}  required/>

        <label class="label" for="Password">Password</label>
        <input type="password" class="input-form" for="cnfpass" placeholder="confirm password" required onChange={cnfPassswordHandler}/>
        
        {errMsg!==''&&
        <div className='alert alert danger'>
            {errMsg}<br/>have a account?<Link to='/admin/login'>,click!</Link></div>
        }
       
    <button type="submit" class="btn-submit">Register</button>

    </form>
    </div>
</div>


  )
}
