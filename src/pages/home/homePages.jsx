import React from 'react';
import { TeamCard } from "../../components/ui";
import  { HomeInfo} from "./components/homeInfo/homeInfo";
import {ModalJoinUs} from "./components/modalJoinUs/modalJoinUs";
import './homePages.css';

export const HomePages = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <div className="header-content">
                    <h1>Хакатон React</h1>
                    <p>
                        Объединяем идеи, воплощаем технологии и создаём инновации, которые меняют мир.
                        Вместе мы строим будущее цифровых решений.
                    </p>
                   <ModalJoinUs/>
                </div>
            </header>

            <HomeInfo/>

            <div className="team-cards">
                <TeamCard/>
            </div>
        </div>
    );
};