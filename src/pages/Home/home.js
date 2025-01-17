import React from 'react';
import {Expandable } from '../../components/common/';

export const  Home = () => {
    return (
        <div className="home-page">
            <h1>Главная страница</h1>
            <p>Добро пожаловать!</p>
            <Expandable label="Подробнее о проекте">
                <p>Здесь находится скрытый текст, который открывается при нажатии на треугольник.</p>
                <p>Можно добавить любые данные, например преимущества, цели и т.д.</p>
            </Expandable>
        </div>
    );
}
