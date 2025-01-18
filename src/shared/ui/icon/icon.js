import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './icon.css';

export const Icon = ({
                         icon, // Теперь принимаем объект иконки
                         inactive = false,
                         disabled = false,
                         size = '24px',
                         margin = '0',
                         padding = '0',
                         ...props
                     }) => {
    // Собираем классы в зависимости от пропсов
    const containerClass = `
    icon-container
    ${inactive ? 'inactive' : ''}
    ${disabled ? 'disabled' : ''}
  `.trim();

    // Часть стилей (size, margin, padding) делаем инлайново
    const containerStyle = {
        fontSize: size,
        margin,
        padding,
    };

    return (
        <div
            className={containerClass}
            style={containerStyle}
            {...props}
        >
            <FontAwesomeIcon icon={icon} />
        </div>
    );
};

Icon.propTypes = {
    icon: PropTypes.object.isRequired, // Теперь icon — объект
    inactive: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
};
