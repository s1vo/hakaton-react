import React from "react";
import { Link, useLocation } from "react-router-dom";
import { teamMembers } from "../../../DB/members";

const routeNames = {
    "/": "Главная",
    "/about": "О нас",
    "/participant": "Участник",
    "*": "Страница не найдена",
};

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    if (location.pathname === "/") {
        return null;
    }

    return (
        <nav aria-label="breadcrumb" style={{ padding: "10px 20px", fontSize: "16px" }}>
            <ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginRight: "8px" }}>
                    <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>
                        {routeNames["/"]}
                    </Link>
                    {pathnames.length > 0 && <span style={{ margin: "0 5px" }}>/</span>}
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    let name = routeNames[`/${value}`] || routeNames["*"];
                    if (to.includes("/participant")) {
                        const memberId = Number(value);
                        const member = teamMembers.find((member) => member.id === memberId);
                        if (member) {
                            name = member.name;
                        }
                    }

                    return (
                        <li key={to} style={{ marginRight: "8px" }}>
                            {isLast ? (
                                <span style={{ fontWeight: "bold", color: "#333" }}>{name}</span>
                            ) : (
                                <>
                                    <Link to={to} style={{ textDecoration: "none", color: "#007bff" }}>
                                        {name}
                                    </Link>
                                    <span style={{ margin: "0 5px" }}>/</span>
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
