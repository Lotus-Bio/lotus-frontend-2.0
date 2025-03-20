import styled, { css } from "styled-components";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const StyledMenu = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

export const Sidebar = styled.aside`
  width: ${({ $isCollapsed }) => ($isCollapsed ? "5rem" : "16rem")};
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 1rem;
  display: flex;
  align-items: ${({ $isCollapsed }) => ($isCollapsed ? "center" : "start")};
  flex-direction: column;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: ${({ $isCollapsed }) => ($isCollapsed ? "5rem" : "5rem")};
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
export const BlockIcon = styled.div`
  background: ${({ theme }) => theme.colors.lightBackgroundGreen};
  color: ${({ theme }) => theme.colors.lightGreen};

  display: flex;
  padding: 0.5rem;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2rem;
`;

export const NavItem = ({ href, isActive, children }) => (
  <Link href={href}>
    <NavItemStyled className={isActive ? "active" : ""}>
      {children}
    </NavItemStyled>
  </Link>
);

export const NavItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGreen};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &.active {
    color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

export const BottomSection = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonToggle = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGreen};
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

export const Content = styled.main`
  margin-left: ${({ $isCollapsed }) => ($isCollapsed ? "5rem" : "16rem")};
  transition: all 0.3s ease-in-out;
  flex-grow: 1;
  overflow-y: auto;
  .outlet {
    padding-top: 2rem;
  }
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 0.75rem;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const ChevronLeftStyled = styled(ChevronLeft)`
  transition: transform 0.3s ease;
  ${({ $rotate }) =>
    $rotate &&
    css`
      transform: rotate(180deg);
    `}
`;
