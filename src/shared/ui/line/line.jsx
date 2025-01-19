import React from "react";
import PropTypes from "prop-types";
import "./line.scss";

export const Line = ({ title, color, value }) => (
    <div className="line">
        <h1 className="line__title">{title}</h1>
        <div className="line__container">
            <div
                className="line__progress"
                style={{ width: `${value}%`, backgroundColor: color }}
            >
                <span className="line__value">{`${value}%`}</span>
            </div>
        </div>
    </div>
);

// Валидация пропсов
Line.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};
