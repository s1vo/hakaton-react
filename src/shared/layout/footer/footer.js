import React, { useState, useEffect } from 'react';
import './footer.css';

export const Footer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer); // Очищаем таймер при размонтировании
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2025 Хакатон React. Все права защищены.</p>
                <p>Текущее время: {time.toLocaleTimeString()}</p>
            </div>
        </footer>
    );
};
