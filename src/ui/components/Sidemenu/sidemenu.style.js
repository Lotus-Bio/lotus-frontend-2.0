import styled from "styled-components";
import Link from "next/link";

export const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const StyledMenu = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8fafc;
  width: 100%;
`;

export const Sidebar = styled.aside`
  width: ${({ $isCollapsed }) => ($isCollapsed ? "5rem" : "16rem")};
  background-color: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 1rem;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;

  .icon {
    padding: 0.5rem;
    background-color: #d1fae5;
    border-radius: 0.375rem;
  }

  .text {
    font-weight: 600;
    color: #1f2937;
  }
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
  color: #6b7280;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    color: #16a34a;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &.active {
    color: #16a34a;
  }
`;

export const BottomSection = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

export const ButtonToggle = styled.button`
  width: 100%;
  background: none;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    color: #16a34a;
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

export const Content = styled.main`
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;

  .outlet {
    padding-top: 2rem;
  }
`;

export const Logout = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #ef4444;

  &:hover {
    background-color: #fef2f2;
    color: #dc2626;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
