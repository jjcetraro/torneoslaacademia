import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth'

export default function PrivateRoute({children, ...rest}) {
    const {currentUser} = useContext(AuthContext)
    
    return (
        <Route
            {...rest}
            render={
                routeProps => !!currentUser ? children : <Navigate to={'/login'}/>
            }
        />
    )
}
