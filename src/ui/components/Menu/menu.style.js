import styled from "styled-components";
import Container from "../Container";

export const StyledMenu = styled.header`
  background-color: rgb(3 7 18 / 0.8);
  backdrop-filter: blur(4px);
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

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

export const NavItem = styled.a`
  color: rgb(209, 213, 219);
  font-size: 0.875rem;
  line-height: 1.25rem;

  &:hover {
    text-decoration: underline;
  }
`;
