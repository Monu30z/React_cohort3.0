import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {
     const {user ,isAuthenticated,isLoading}= useSelector((state)=> state.auth)

        if(isLoading) return <h1>Lading state....</h1>


   if(user){
    return <Navigate to={"/main"}/>
   }
  return <Outlet/>
}

export default PublicRoute