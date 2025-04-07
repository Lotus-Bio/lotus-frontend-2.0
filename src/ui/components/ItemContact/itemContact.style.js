import styled from "styled-components";

export const StyledItemContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  max-width: 300px;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.lightGreen};
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.darkGreen};
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 0.25rem;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1rem;
`;
