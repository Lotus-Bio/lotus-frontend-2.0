import React, { useState, useEffect } from "react";
import Button from "../Button";
import Logo from "../Logo";
import Link from "next/link";
import Image from "next/image";
import {
  StyledMenu,
  ExtendedContainer,
  Nav,
  NavItem,
  BurgerIcon,
  NavMobile,
} from "./menu.style";
import { useRouter } from "next/navigation";

const Menu = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledMenu $scrolled={scrolled}>
      <ExtendedContainer>
        <Link href="#header">
          <Image
            src="/images/logo.svg"
            alt="Logo Lotus"
            width={80}
            height={10}
          />
        </Link>

        <BurgerIcon onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </BurgerIcon>

        <Nav>
          <NavItem href="#mission">Sobre</NavItem>
          <NavItem href="#feature">Funcionalidades</NavItem>
          <NavItem href="#plan">Planos</NavItem>
          <NavItem href="#form">Contato</NavItem>
          <Button onClick={() => router.push("/login")}>Entrar</Button>
        </Nav>

        {isMenuOpen && (
          <NavMobile>
            <NavItem href="#mission" onClick={closeMenu}>
              Sobre
            </NavItem>
            <NavItem href="#feature" onClick={closeMenu}>
              Funcionalidades
            </NavItem>
            <NavItem href="#plan" onClick={closeMenu}>
              Planos
            </NavItem>
            <NavItem href="#form" onClick={closeMenu}>
              Contato
            </NavItem>
            <Button onClick={() => router.push("/login")}>Entrar</Button>
          </NavMobile>
        )}
      </ExtendedContainer>
    </StyledMenu>
  );
};

export default Menu;
