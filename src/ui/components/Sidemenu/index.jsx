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
  ChevronLeftStyled,
} from "./sidemenu.style";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Sidemenu = () => {
  const router = useRouter();
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

  async function handleSignOut() {
    try {
      await signOut(auth);
      toast.success("Usuário deslogado com sucesso", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      router.push("/login");
    } catch (error) {
      toast.error("Ocorreu um erro ao deslogar o usuário", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
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

          <BottomSection $isCollapsed={isSidebarCollapsed}>
            <ButtonToggle
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            >
              <ChevronLeftStyled rotate={isSidebarCollapsed} />
              {!isSidebarCollapsed && <span>Recolher</span>}
            </ButtonToggle>
            <Logout onClick={handleSignOut}>
              <LogOut />
              {!isSidebarCollapsed && <span>Sair</span>}
            </Logout>
          </BottomSection>
        </Sidebar>
      </StyledMenu>

      <Content $isCollapsed={isSidebarCollapsed}>
        <div className="outlet"></div>
      </Content>
    </StyledWrapper>
  );
};

export default Sidemenu;
