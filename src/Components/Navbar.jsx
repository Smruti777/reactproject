import React from'react';
import { Text,Box } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar=() =>
{
    return(
        <div className='main'>
            <Box>
                <Text textAlign='center' as='mark' bg='#FC8181' color='white' fontSize='5xl' ><Text as='i'>CASA LIVING</Text></Text>
            </Box>
            <div className='nav1'>
                <Link className='link1' to="#">Find A Studio</Link>&nbsp;&nbsp;
                <Link className='link1' to="#">Get Inspired</Link>&nbsp;&nbsp;  
                <Link className='link1' to="#">Contact us</Link>&nbsp; &nbsp; &nbsp; &nbsp;

            </div>
            <div className='nav2'>
                <Link className='link' to="/">Home</Link>&nbsp; &nbsp; &nbsp; &nbsp;
                <Link className='link' to="/products">Product</Link>&nbsp; &nbsp; &nbsp; &nbsp;
                <Link className='link' to="#">Account</Link>&nbsp; &nbsp; &nbsp; &nbsp;
                <Link className='link' to="/about">About Us</Link>  
            </div>
        </div>
        
    )
}

export default Navbar;