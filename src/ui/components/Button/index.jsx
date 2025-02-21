import { StyledButton } from "./button.style";

const Button = ({ children, onClick, ghost = false }) => {
  return (
    <StyledButton ghost={ghost} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
