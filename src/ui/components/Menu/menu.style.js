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
`;

export const NavItem = styled(Link)`
  color: rgb(209, 213, 219);
  font-size: 0.875rem;
  line-height: 1.25rem;

  &:hover {
    color: rgb(100, 100, 100);
  }
`;
