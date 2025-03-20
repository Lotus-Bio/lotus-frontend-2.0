import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 0.375rem;
  background-color: ${({ $ghost, theme }) =>
    $ghost ? "transparent" : theme.colors.lightGreen};

  color: ${({ $ghost, theme }) =>
    $ghost ? theme.colors.lightGreen : theme.colors.white};

  border: ${({ $ghost, theme }) =>
    $ghost ? `1px solid ${theme.colors.lightGreen}` : "none"};
  padding: 12px 24px;
  font-size: 14px;
  line-height: 1.25rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  width: 100%;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: ${({ $ghost, theme }) =>
      $ghost ? theme.colors.lightGreen : theme.colors.buttonHoverGreen};
    color: ${({ theme }) => theme.colors.white};
    border: ${({ $ghost, theme }) =>
      $ghost ? `1px solid ${theme.colors.buttonHoverGreen}` : "none"};
    transition: all 0.3s ease;
  }
`;
