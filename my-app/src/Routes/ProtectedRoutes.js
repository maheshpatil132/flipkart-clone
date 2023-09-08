import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children, isAdmin }) => {
    const { loading, isAuthenticated, user } = useSelector(state => state.User);
  return (
    <>
            {loading === false && (
                isAuthenticated === false ? <Navigate to="/login" /> : isAdmin ? user.role !== "admin" ? <Navigate to="/login" /> : children : children
            )}
        </>
  )
}

export default ProtectedRoutes