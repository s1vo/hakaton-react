import React from "react";
import PropTypes from "prop-types";
import "./checkbox.scss";

export const CheckBox = ({ onClick }) => (
    <div className="checkbox-wrapper-2">
        <input
            onClick={onClick}
            id="checkbox"
            type="checkbox"
            className="sc-gJwTLC ikxBAC"
        />
        <label htmlFor="checkbox" className="checkbox-label">
            Избранное
        </label>
    </div>
);

// Валидация пропсов
CheckBox.propTypes = {
    onClick: PropTypes.func.isRequired,
};
