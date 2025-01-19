import React from "react";
import { Link, NavLink } from "react-router-dom"; // Используем NavLink вместо Link
import logo from "../../../assets/images/logo.svg";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Логотип" width="45" height="45" />
        </Link>
        <Link to="/">
          <span className="navbar-logo-text">Хакатон React</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink className="navbar-link" to="/" exact activeClassName="active">
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/team" activeClassName="active">
            Участники
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/favourites" activeClassName="active">
            Избранное
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/contacts" activeClassName="active">
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
