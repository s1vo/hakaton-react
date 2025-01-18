import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 1. Определяем стили для обёртки навбара
const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2196f3;
  padding: 0.5rem 1rem;
`;

// 2. Логотип
const Logo = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
`;

// 3. Список ссылок
const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0; /* Сбрасываем отступы по умолчанию */
  padding: 0;
`;

// 4. Ссылка (обёртка Link из react-router-dom)
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo>Хакатон React</Logo>
      <Links>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/about">О нас</NavLink>
        </li>
        {/* <li>
                    <NavLink to="/participants">Участники</NavLink>
                </li> */}
        <li>
          <NavLink to="/contacts">Контакты</NavLink>
        </li>
      </Links>
    </StyledNavbar>
  );
};
