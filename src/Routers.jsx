import React from 'react';
import {  BrowserRouter,Routes,Route} from "react-router-dom";
import Calendly from './components/Calendly';
import Enterprise from './components/Enterprise';
import Team from './components/Team';
import Individuals from "./components/Individuals";
import Navbar from './components/Navbar';

const Routers = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Calendly/>}/>
                <Route path='/team' element={<Team/>}/>
                <Route path='/enterprise' element={<Enterprise/>}/>
                <Route path='/individuals' element={<Individuals/>}/>
            </Routes>
            </BrowserRouter>
         
        </div>
    );
}

export default Routers;
