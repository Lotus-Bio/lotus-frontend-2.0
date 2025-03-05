import React, { useState, useEffect } from "react";
import Button from "../Button";
import Logo from "../Logo";
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
        <Logo light />
        <Nav>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Feature</NavItem>
          <NavItem href="#">Pricing</NavItem>
          <Button>Contact Us</Button>
        </Nav>
      </ExtendedContainer>
    </StyledMenu>
  );
};

export default Menu;
