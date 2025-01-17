import React, { useState } from 'react';
import styled from 'styled-components';
import {Icon} from "../../index";
// Стили для обёртки
const Container = styled.div`
  margin: 1rem 0;
`;

// Стили для "треугольника" (иконки)
const Triangle = styled.span`
  display: inline-block;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: transform 0.3s;

  /* Поворот, если текст открыт */
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

// Стили для контента
const TextBlock = styled.div`
  margin-left: 1.5rem; /* чтобы текст немного сдвинуть после треугольника */
  padding: 0.5rem;
  border-left: 2px solid #ccc;
`;

export const Expandable = ({ label = 'Нажми на треугольник', children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <Container>
            <Triangle isOpen={isOpen} onClick={handleToggle}>
                <Icon id="fa-solid fa-arrow-right" margin="0 0 0 10px" />
            </Triangle>
            <span>{label}</span>
            {isOpen && (
                <TextBlock>
                    {children}
                </TextBlock>
            )}
        </Container>
    );
}


