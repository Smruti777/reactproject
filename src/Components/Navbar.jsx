import React from'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar=() =>
{
    return(
        <div className='main'>
            <div className='Header'>
                <Link to="/"><img className='logo'src="https://i.pinimg.com/originals/20/9c/36/209c3603015dfc4a79f59efd7d5217ce.png" alt="" /></Link> 
                <input className='search' type="text" placeholder='SEARCH' /> 
            </div>
            <div className='nav1'>
                <Link className='link1' to="/">Home</Link>&nbsp; &nbsp; &nbsp; &nbsp;
            </div>
            
            <div className='nav2'>
                <Link className='link' to="/">Home</Link>&nbsp; &nbsp; &nbsp; &nbsp;  
            </div>
        </div>
    )
}

export default Navbar;