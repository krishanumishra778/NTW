import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PublicRoute = ({children}) => {
    const {isAuthenticated} = useSelector((state)=>state.user);
    if (isAuthenticated) {
        return <Navigate to='/' />;
    }
    return <>{children}</>;
}

export default PublicRoute
