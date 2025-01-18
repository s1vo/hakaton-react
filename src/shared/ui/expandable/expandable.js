import React, { useState } from 'react';
import {Icon} from "../icon/icon";
import './expandable.css';

export const Expandable = ({ label = 'Нажми на треугольник', children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="expandable-container">
            <span
                className={`triangle ${isOpen ? 'open' : ''}`}
                onClick={handleToggle}
            >
            <Icon id="fa-solid fa-arrow-right" margin="0 0 0 10px" />
            </span>
            <span className="expandable-label">{label}</span>
            {isOpen && (
                <div className="expandable-text">
                    {children}
                </div>
            )}
        </div>
    );
};
