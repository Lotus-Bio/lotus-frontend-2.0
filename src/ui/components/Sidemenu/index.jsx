"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  StickyNote,
  UserCircle,
  LogOut,
  Leaf,
  ChevronLeft,
} from "lucide-react";
import {
  StyledMenu,
  Sidebar,
  Nav,
  NavItem,
  BottomSection,
  ButtonToggle,
  Content,
  Logout,
  StyledWrapper,
} from "./sidemenu.style";

const Sidemenu = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const shouldRenderMenu = [
    "/dashboard",
    "/calendar",
    "/notes",
    "/profile",
  ].includes(pathname);

  if (!shouldRenderMenu) {
    return null;
  }

  return (
    <StyledWrapper>
      <StyledMenu>
        <Sidebar $isCollapsed={isSidebarCollapsed}>
          <Leaf />

          <Nav>
            <NavItem href="/dashboard" isActive={isActive("/dashboard")}>
              <LayoutDashboard />
              {!isSidebarCollapsed && <span>Dashboard</span>}
            </NavItem>
            <NavItem href="/calendar" isActive={isActive("/calendar")}>
              <Calendar />
              {!isSidebarCollapsed && <span>Calendário</span>}
            </NavItem>
            <NavItem href="/notes" isActive={isActive("/notes")}>
              <StickyNote />
              {!isSidebarCollapsed && <span>Notas</span>}
            </NavItem>
            <NavItem href="/profile" isActive={isActive("/profile")}>
              <UserCircle />
              {!isSidebarCollapsed && <span>Perfil</span>}
            </NavItem>
          </Nav>

          <BottomSection>
            <ButtonToggle
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            >
              <ChevronLeft
                className={`rotate-180 ${
                  isSidebarCollapsed ? "" : "rotate-180"
                }`}
              />
              {!isSidebarCollapsed && <span>Recolher</span>}
            </ButtonToggle>
            <Logout href="/login">
              <LogOut />
              {!isSidebarCollapsed && <span>Sair</span>}
            </Logout>
          </BottomSection>
        </Sidebar>
      </StyledMenu>

      <Content>
        <div className="outlet"></div>
      </Content>
    </StyledWrapper>
  );
};

export default Sidemenu;
