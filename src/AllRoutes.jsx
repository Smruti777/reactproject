import React from 'react';
import{Route,Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import About  from './Pages/About';
const AllRoutes= () => 
{
    return(
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/about' element={<About/>} ></Route>
        </Routes>
    )
}
export default AllRoutes;