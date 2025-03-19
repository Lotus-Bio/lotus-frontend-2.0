import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $large }) => ($large ? "0.5rem" : "0.25rem")};

  width: fit-content;

  color: ${({ $light }) =>
    $light ? ({ theme }) => theme.colors.white : "rgb(44, 92, 36)"};
  font-weight: 600;
  font-size: ${({ $large }) => ($large ? "40px" : "1.25rem")};
  line-height: ${({ $large }) => ($large ? "40px" : "1.75rem")};

  svg {
    width: ${({ $large }) => ($large ? "1.875rem" : "24px")};
    height: ${({ $large }) => ($large ? "2.25rem" : "24px")};
    color: ${({ theme }) => theme.colors.lightGreen};
  }
`;
