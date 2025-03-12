import React, { useState, useEffect } from "react";
import Button from "../Button";
import Logo from "../Logo";
import Link from "next/link";
import {
  StyledMenu,
  ExtendedContainer,
  Nav,
  NavItem,
  BurgerIcon,
  NavMobile,
} from "./menu.style";

const Menu = () => {
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
          <Logo light />
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
          <Button>Entrar</Button>
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
            <Button onClick={closeMenu}>Entrar</Button>
          </NavMobile>
        )}
      </ExtendedContainer>
    </StyledMenu>
  );
};

export default Menu;
