import { Leaf } from "lucide-react";
import { StyledLogo } from "./logo.style";

const Logo = ({ large = false, light = false }) => {
  return (
    <StyledLogo $light={light} $large={large}>
      <Leaf />
      Lotus
    </StyledLogo>
  );
};

export default Logo;
