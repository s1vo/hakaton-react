import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import {  HomePages, AboutPages, ParticipantsPages } from '../pages';


const AppRouter =() => {
    return (
        <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/about" element={ <AboutPages/>} />
            <Route path="/participants" element={ <ParticipantsPages /> } />
        </Routes>
    );
}

export default AppRouter;
