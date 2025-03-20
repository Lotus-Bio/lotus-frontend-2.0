import styled from "styled-components";

export const StyledNoteItem = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  padding: 1rem;

  display: flex;
  gap: 0.5rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
