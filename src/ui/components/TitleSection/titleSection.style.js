import styled from "styled-components";

export const StyledTitleSection = styled.h2`
  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1.5rem;

  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
