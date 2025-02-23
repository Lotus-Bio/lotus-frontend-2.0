import Button from "../Button";
import Logo from "../Logo";
import { StyledMenu, ExtendedContainer, Nav, NavItem } from "./menu.style";

const Menu = () => {
  return (
    <StyledMenu>
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
