// //LoginForm.js
// import React,{useState,useContext} from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import AuthContext from '../store/AuthContext'
// import './login.css';

// export const LoginForm = (props) => {
//     let AuthCtx=useContext(AuthContext)
//     let navigate=useNavigate()
//     let [errMsg,setErrMsg]=useState()
//     let [user,setuser]= useState({
//         email:'',
//         password:''
//     })

//     let emailHandler=(event)=>{
//         setuser({
//             ...user,
//             email:event.target.value
//         })
        

//     }
//     let passwordHandler=(event)=>{
//         setuser({
//             ...user,
//             password:event.target.value
//         })

//     }
//     let formLoginHandler= async (event)=>{
//         // let error=''
        
//         event.preventDefault()

//         axios.post('http://127.0.0.1:4001/user/login',user,{
//             headers:{
//                 'Content-Type':'application/json'

//             }
//         }).then(response=>{
//             // localStorage.setItem('user',response.data.user)
//             // localStorage.setItem('token',response.data.token)
//             AuthCtx.setIsLoggedIn(true)

//             navigate('/product/add')
//             console.log(`Login Done!!`);

//         })
//         .catch(error=>{
//             setErrMsg(error.response.data.message)
//         })
//     }
    
    
//   return (

//     <div class="container">
//         <div class="circle1"></div>
//         <div class="circle2"></div>
//         <div class="form-wrapper">
//             <h1>Login Here</h1>
//             <form onSubmit={formLoginHandler}>
//                 <label class="label" for="Username">Username</label>
//                 <input class="input-form" type="text" onChange={emailHandler} placeholder="Email or Phone" required/> 
                
//                 <label class="label" for="Password">Password</label>
//                 <input class="input-form" type="password" onChange={passwordHandler} placeholder="Password" required/>
//                 {errMsg!==''&&
//                 <div className='alert alert danger'>{errMsg}</div>
//                 }
//             </form>
//             <a href="#">Don't have an account</a>
//             <button class="btn-submit">Submit</button>
//         </div>
//     </div>


//     // <div className='form-container'>
//     //    <h1 className="title"  style={{color:"#E6EBE0", backgroundColor:"#6c757d"}}> Admin Login </h1>
//     //     <form onSubmit={formLoginHandler}>
//     //         <div>
//     //             <div className="form-input">
//     //                 <input type="email" placeholder="Admin's email" onChange={emailHandler}
//     //                 required/>
//     //             </div>
//     //             <div className="form-input">
//     //                 <input type="password" placeholder="password" onChange={passwordHandler} required/>
//     //             </div>
//     //             <div className="clearfix"></div>
//     //             <div className="form-input">
//     //                 <button className="btn btn-success">Login</button>
//     //             </div>

//     //             <div className="clearfix"></div>
                
//     //             {errMsg!==''&&
//     //             <div className='alert alert danger'>{errMsg}</div>
//     //             }
//     //             </div>
//     //         </form>
//     // </div>
//   )
// }
