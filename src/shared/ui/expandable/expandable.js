import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "../icon/icon";
import "./expandable.scss";

export const Expandable = ({ label = "Нажми на треугольник", children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="expandable-container"  onClick={handleToggle}>
          <span
              className={`triangle ${isOpen ? "open" : ""}`}

          >
            <Icon id="fa-arrow-right" margin="0 0 0 10px" />
        </span>
            <span className="expandable-label">{label}</span>
            {isOpen && <div className="expandable-text">{children}</div>}
        </div>
    );
};

// Валидация пропсов
Expandable.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node.isRequired,
};
