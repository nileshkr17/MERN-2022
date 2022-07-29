import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import AuthContext from '../Store/Auth/AuthContext'
import { LoginForm } from './LoginForm'

export const ProtectRoute = () => {
    let AuthCtx= useContext(AuthContext)
  return (
    AuthCtx.isLoggedIn ? <Outlet></Outlet> : <LoginForm></LoginForm>
  )
}
