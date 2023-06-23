import React from 'react'
import { Navigate} from 'react-router-dom'

function ProtectedRoutes() {

        return <Navigate to={'/'}/>

}

export default ProtectedRoutes