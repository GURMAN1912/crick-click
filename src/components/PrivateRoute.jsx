import React from 'react'
import { Navigate } from 'react-router-dom';
export default function PrivateRoute({user}) {
    console.log(user);

  return user? <Outlet/>: <Navigate to='/sign-in'/>;
}
