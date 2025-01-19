import React from "react";
import { Link, useLocation } from "react-router-dom";
import { teamMembers } from "../../../DB/members";
import "./breadcrumbs.scss"; // Подключаем SCSS файл

const routeNames = {
    "/": "Главная",
    "/team": "Команда",
    "/favourites": "Избранное",
    "*": "Страница не найдена",
};

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    if (location.pathname === "/") {
        return null;
    }

    return (
        <nav aria-label="breadcrumb" className="breadcrumb">
            <ol className="breadcrumb__list">
                <li className="breadcrumb__item">
                    <Link to="/" className="breadcrumb__link">
                        {routeNames["/"]}
                    </Link>
                    {pathnames.length > 0 && <span className="breadcrumb__divider">/</span>}
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    let name = routeNames[`/${value}`] || routeNames["*"];
                    if (to.includes("/team")) {
                        const memberId = Number(value);
                        const member = teamMembers.find((member) => member.id === memberId);
                        if (member) {
                            name = member.name;
                        }
                    }

                    return (
                        <li key={to} className="breadcrumb__item">
                            {isLast ? (
                                <span className="breadcrumb__current">{name}</span>
                            ) : (
                                <>
                                    <Link to={to} className="breadcrumb__link">
                                        {name}
                                    </Link>
                                    <span className="breadcrumb__divider">/</span>
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
