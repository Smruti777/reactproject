import React from 'react';
import{Route,Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import About  from './Pages/About';
import LoginPage from './Components/Login/Login';
import RegisterPage from './Components/Signup/Signup';
const AllRoutes= () => 
{
    return(
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/signup' element={<RegisterPage/>}></Route>
            <Route path='/about' element={<About/>} ></Route>
        </Routes>
    )
}
export default AllRoutes;