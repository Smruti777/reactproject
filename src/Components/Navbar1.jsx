import React from'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Navbar1=() =>
{
    return(
        <div className='main'>
            <div className='nav1'>
                <Link className='link1' to="/">Home</Link>&nbsp; &nbsp; &nbsp; &nbsp;
                <Link className='link1' to="/products">Product</Link>
            </div>
        
            <div className='nav2'>
                <Link className='link' to="/">Home</Link>&nbsp; &nbsp; &nbsp; &nbsp;
                <Link className='link' to="/products">Product</Link>  
            </div>
        </div>
    )
}
export default Navbar1;