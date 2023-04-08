
import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from "./../Pages/Home"
import Tours from "./../Pages/Tours"
import TourDeatails from "./../Pages/TourDeatails"
import Login from "./../Pages/Login"
import Registar from "./../Pages/Registar"
import SearchResultsList from "./../Pages/SearchResultsList"
import ThankYou from '../Pages/ThankYou';
const Router = () => {
    return (
        <Routes>
            <Route path='/'element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/tours' element={<Tours/>}/>
            <Route path='/tours/:id' element={<TourDeatails/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Registar/>}/>
            <Route path='/thank-you' element={<ThankYou/>}/>
            <Route path='/tours/search' element={<SearchResultsList/>}/>
        </Routes>
    );
}

export default Router;


