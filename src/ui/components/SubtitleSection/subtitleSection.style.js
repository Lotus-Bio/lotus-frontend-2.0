import styled from "styled-components";

export const StyledSubtitleSection = styled.h3`
  color: ${({ theme, dark }) =>
    dark ? theme.colors.darkGrey : theme.colors.lightGrey};
  font-size: 1.125rem;
  line-height: 1.75rem;
  max-width: 48rem;
  margin: 0 auto;

  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
