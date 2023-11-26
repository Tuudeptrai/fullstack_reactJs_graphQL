import { Box, Typography } from '@mui/material';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
            <Typography variant='h4' sx={{mb: '20px'}}>Note App</Typography>
            <Box sx={{display:'flex', justifyContent:'right', mb: '10px'}}>
                <UserMenu/>
            </Box>
            </>
            
        );
    }
}

export default Home;