import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../utils/redux/actions/AuthActions'


export default function ProtectedRoutes({ children }) {

    const { isAuthenticated = false, loading = true, user } = useSelector((state) => state.auth)
    
    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) {
           dispatch(loadUser) 
        }
    }, [ isAuthenticated, loading ])
    
    if(loading) return <h1>Loading...</h1>

    if (!loading && isAuthenticated) {
        return children
    } else {
        return <Navigate to="/" />
    }
}

