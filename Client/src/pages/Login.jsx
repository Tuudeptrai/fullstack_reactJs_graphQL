import React, { Component } from 'react';
import {Typography,Button} from '@mui/material'
import { GoogleAuthProvider, signInWithPopup , getAuth} from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
   
        const navigate = useNavigate();
        const auth = getAuth();
        const {user} = useContext(AuthContext)
        const handleLoginWithGoogle = async () =>{
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        console.log({res})
        };
        if (user?.uid){
            navigate("/");
            return ;
        }
        return (
            <div>
                <Typography variant='h5' sx={{margin:'20px'}}>Welcome to note app</Typography>
                <Button variant='outlined' onClick={handleLoginWithGoogle}>
                    Login with goolge
                </Button>
            </div>
        );
  
}

