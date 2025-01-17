import React from 'react';
import styled from 'styled-components';

// Создаём стилизованный компонент "footer"
const StyledFooter = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #eeeeee;
  margin-top: 2rem;
`;

export const Footer =() => {
    return (
        <StyledFooter>
            <p>© 2025 Хакатон React. Все права защищены.</p>
        </StyledFooter>
    );
}

