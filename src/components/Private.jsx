import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'; 

export default function Private() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
  return email&&password?<Outlet />: <Navigate to="/login" />;
}
