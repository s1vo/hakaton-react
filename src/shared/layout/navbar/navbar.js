import React from 'react';
import { NavLink } from 'react-router-dom'; // Используем NavLink вместо Link
import './navbar.css';
import logo from '../../../assets/images/logo.svg';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Логотип" width="45" height="45" />
                <span className="navbar-logo-text">Хакатон React</span>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink
                        className="navbar-link"
                        to="/"
                        exact
                        activeClassName="active"
                    >
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="navbar-link"
                        to="/about"
                        activeClassName="active"
                    >
                        О нас
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="navbar-link"
                        to="/participants"
                        activeClassName="active"
                    >
                        Участники
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="navbar-link"
                        to="/contacts"
                        activeClassName="active"
                    >
                        Контакты
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
