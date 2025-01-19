import React from "react";
import PropTypes from "prop-types";
import "./badge.scss";

export const Badge = ({ colorClass, children }) => {
    return <span className={`badge ${colorClass}`}>{children}</span>;
};

// Валидация пропсов
Badge.propTypes = {
    colorClass: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};