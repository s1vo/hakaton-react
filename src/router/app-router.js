import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { HomePages, AboutPages, ParticipantPage, NotFound } from "../pages";
import { Breadcrumbs } from "../shared/ui";


const AppRouter =() => {
    return (
        <>
            <Breadcrumbs />
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/about" element={ <AboutPages/>} />
                <Route path="/participant/:id" element={<ParticipantPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default AppRouter;
