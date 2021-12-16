import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router';
import { selectUser } from '../features/userSlice'
import { checkAdminRole } from '../utils/roleCheck';

export default function PrivateRoute({role}) {
    const currentUser = useSelector(selectUser);
    const isAdmin = checkAdminRole(currentUser.AccountRole[0])
    if(role && !isAdmin)
    return <Navigate to="/staff"/>
    return currentUser? <Outlet/> : <Navigate to="/login" />
}
