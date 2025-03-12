import styled from "styled-components";
import Container from "../Container";
import Link from "next/link";

export const StyledMenu = styled.header`
  background-color: ${(props) =>
    props.$scrolled ? "rgb(3 7 18 / 0.8)" : "transparent"};
  transition: background-color 0.5s;
  backdrop-filter: blur(4px);
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  padding: 0.5rem 0;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export const ExtendedContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  color: rgb(209, 213, 219);
  font-size: 0.875rem;
  line-height: 1.25rem;

  &:hover {
    color: rgb(100, 100, 100);
  }
`;

export const BurgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    width: 30px;
    height: 4px;
    background: #fff;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavMobile = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;

  @media (min-width: 769px) {
    display: none;
  }

  ${NavItem} {
    color: white;
    font-size: 1.25rem;
    &:hover {
      color: rgb(100, 100, 100);
    }
  }
`;
