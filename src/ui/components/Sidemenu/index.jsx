"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Calendar,
  UserCircle,
  LogOut,
  BarChart2,
  Bell,
} from "lucide-react";
import {
  StyledMenu,
  Sidebar,
  Logo,
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
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const shouldRenderMenu = [
    "/dashboard",
    "/analytics",
    "/calendar",
    "/alert",
    "/profile",
  ].includes(pathname);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setIsSidebarCollapsed(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <Logo>
            {isSidebarCollapsed ? (
              <Image
                src="/images/icon3.svg"
                alt="Logo Lotus"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/images/logo.svg"
                alt="Logo Lotus"
                width={100}
                height={40}
              />
            )}
          </Logo>

          <Nav>
            <NavItem href="/dashboard" isActive={isActive("/dashboard")}>
              <LayoutDashboard />
              {!isSidebarCollapsed && <span>Dashboard</span>}
            </NavItem>
            <NavItem href="/analytics" isActive={isActive("/analytics")}>
              <BarChart2 />
              {!isSidebarCollapsed && <span>Analytics</span>}
            </NavItem>
            <NavItem href="/calendar" isActive={isActive("/calendar")}>
              <Calendar />
              {!isSidebarCollapsed && <span>Calendário</span>}
            </NavItem>
            <NavItem href="/alert" isActive={isActive("/alert")}>
              <Bell />
              {!isSidebarCollapsed && <span>Alertas</span>}
            </NavItem>
            <NavItem href="/profile" isActive={isActive("/profile")}>
              <UserCircle />
              {!isSidebarCollapsed && <span>Perfil</span>}
            </NavItem>
          </Nav>

          <BottomSection $isCollapsed={isSidebarCollapsed}>
            {!isMobile && (
              <ButtonToggle
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              >
                <ChevronLeftStyled $rotate={isSidebarCollapsed} />
                {!isSidebarCollapsed && <span>Recolher</span>}
              </ButtonToggle>
            )}
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
