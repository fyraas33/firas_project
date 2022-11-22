import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = () => {
    const user=useSelector(store=>store.user?.user)
  console.log(user)
  return (  
  user?.status==="admin" ? <Outlet/> : <Navigate to={"/dashboard"}/>
  )
}

export default AdminRoute