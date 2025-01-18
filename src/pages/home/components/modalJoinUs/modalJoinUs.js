import React, { useState } from 'react';
import './modalJoinUs.css';

export const ModalJoinUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button className="cta-button" onClick={openModal}>
                Присоединяйтесь к нам
            </button>
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            &times;
                        </button>
                        <h2>Знаю-знаю, хочешь к нам! 😉</h2>
                        <p className="modal-text">
                            Мы ведь суперкоманда, правда? Не переживай, скоро ты станешь частью лучшего коллектива,
                            где мы создаём невероятные проекты и шутим над багами! 😂
                        </p>
                        <p className="modal-text">А теперь к делу — жми на кнопку и погнали работать вместе!</p>
                        <button className="modal-action-button" onClick={closeModal}>
                            Я с вами!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
