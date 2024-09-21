import React, { useEffect } from 'react'
import { useAuth } from './AuthApi'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {

    // const Navigate = useNavigate()

    const { isAuthenticated, login } = useAuth();

    useEffect(() => {
        console.log(isAuthenticated);
    }, [isAuthenticated])

    return isAuthenticated ?
        element :
        <>
            <p>User is not logged in</p>
            <button className='border' onClick={login}>Login</button>
        </>


}

export default ProtectedRoute
