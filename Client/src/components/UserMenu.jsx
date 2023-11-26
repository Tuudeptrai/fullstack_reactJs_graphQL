import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Avatar, Box, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';

export default function UserMenu(props) {

    const { user: { displayName, photoURL , auth} } = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = useState(null);
    // console.log({user});
    const handleLogout = () => {
        auth.signOut();
      };
    const handleClose = () => {
        setAnchorEl(null);
      };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
      };
    const open = Boolean(anchorEl);

    return (
        <>
            <Box sx={{ display: 'flex' }}  onClick={handleClick}>
                <Typography>{displayName}</Typography>
                <Avatar alt='avatar' src={photoURL} sx={{ width: 24, height: 24, ml: '6px' }} />
            </Box>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}
