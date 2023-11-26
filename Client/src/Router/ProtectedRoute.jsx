import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({children})  {
    const navigate = new useNavigate();
    if (! localStorage.getItem('accessToken')){
        navigate("/login");
        return;
    }
        return (
            <Outlet/>
        );
    
}