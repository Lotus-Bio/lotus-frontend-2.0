import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 0.375rem;
  background-color: ${({ $ghost }) =>
    $ghost ? "transparent" : ({ theme }) => theme.colors.lightGreen};
  color: ${({ $ghost }) =>
    $ghost
      ? ({ theme }) => theme.colors.lightGreen
      : ({ theme }) => theme.colors.white};
  border: ${({ $ghost }) =>
    $ghost ? `1px solid ${({ theme }) => theme.colors.lightGreen}` : "none"};
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
    background-color: ${({ $ghost }) =>
      $ghost ? ({ theme }) => theme.colors.lightGreen : "rgb(68, 132, 60)"};
    color: ${({ theme }) => theme.colors.white};
    border: ${({ $ghost }) => ($ghost ? `1px solid rgb(68, 132, 60)` : "none")};
    transition: all 0.3s ease;
  }
`;
