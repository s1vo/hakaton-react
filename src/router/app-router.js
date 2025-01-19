import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { HomePages, TeamPage, ParticipantPage, NotFound, Favourites } from "../pages";
import { Breadcrumbs } from "../shared/ui";


const AppRouter =() => {
    return (
        <>
            <Breadcrumbs />
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/team/:id" element={<ParticipantPage />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default AppRouter;
