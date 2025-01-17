import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { About,Home, Participants} from '../pages/index';


const AppRouter =() => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/participants" element={<Participants />} />
        </Routes>
    );
}

export default AppRouter;
