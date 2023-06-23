import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {

        return <Navigate to={'/'}/>

}

export default ProtectedRoutes