import styled from "styled-components";

export const StyledUserInfo = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 1rem;
  padding: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin-top: 2rem;
  width: fit-content;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  h3 {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.2rem;
  }

  div.circulo {
    background: ${({ theme }) => theme.colors.darkActive};
    color: ${({ theme }) => theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
`;
