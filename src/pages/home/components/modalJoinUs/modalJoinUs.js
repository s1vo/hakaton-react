import React, { useState } from "react";
import "./modalJoinUs.css";
import { Button } from "../../../../shared/ui";

export const ModalJoinUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button
        color="#2563eb"
        func={openModal}
        title="Присоединяйтесь к нам"
        type="circle"
      />
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <h2>Знаю-знаю, хочешь к нам! 😉</h2>
            <p className="modal-text">
              Мы ведь суперкоманда, правда? Не переживай, скоро ты станешь
              частью лучшего коллектива, где мы создаём невероятные проекты и
              шутим над багами! 😂
            </p>
            <p className="modal-text">
              А теперь к делу — жми на кнопку и погнали работать вместе!
            </p>
            <Button
              color="#2563eb"
              func={closeModal}
              title="Я с вами"
              type="circle"
            />
          </div>
        </div>
      )}
    </div>
  );
};
