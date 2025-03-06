import React, { useState, useEffect } from "react";
import Button from "../Button";
import Logo from "../Logo";
import Link from "next/link";
import { StyledMenu, ExtendedContainer, Nav, NavItem } from "./menu.style";

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledMenu scrolled={scrolled}>
      <ExtendedContainer>
        <Link href="#header">
          <Logo light />
        </Link>
        <Nav>
          <NavItem href="#mission">Sobre</NavItem>
          <NavItem href="#feature">Funcionalidades</NavItem>
          <NavItem href="#plan">Planos</NavItem>
          <NavItem href="#form">Contato</NavItem>
          <Button>Entrar</Button>
        </Nav>
      </ExtendedContainer>
    </StyledMenu>
  );
};

export default Menu;
