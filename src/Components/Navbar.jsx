import React from'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar=() =>
{
    return(
        <div className='main'>
            <div className='Header'>
                
                <Link to="/"><img className='logo'src="https://i.pinimg.com/originals/20/9c/36/209c3603015dfc4a79f59efd7d5217ce.png" alt="" /></Link> 
                {/* <input className='search' type="text" placeholder='SEARCH' />  */}
            </div>
            <div className='Header2'>
                <div class="col-1">
                <i className="fa-regular fa-user"></i>
                </div>
                <div class="col-1">
                <i class="fa-regular fa-bell"></i>
                </div>
                <div class="col-">
                <i class="fa-regular fa-heart"></i>
                </div>
                
            </div>
            {/* <div className='nav1'>
                <Link className='link1' to="/">Home</Link>&nbsp; &nbsp; &nbsp; &nbsp;
            </div> */}
            
            <div className='nav2'>
              <ul>
                <li><a href="#">Sofas</a></li>
                <li><a href="#">Chair</a></li>
                <li><a href="#">Bean Bag</a></li>
                <li><a href="#">Bed</a></li>
             </ul>
            </div>
             
           
        </div>
        
    )
}

export default Navbar;