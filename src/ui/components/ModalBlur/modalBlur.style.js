import styled from "styled-components";

export const StyledModalBlur = styled.div`
  position: fixed;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  background: ${({ theme }) => theme.colors.blur};
  backdrop-filter: blur(3px);
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.blur};
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const BlockIcon = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.lightGreen};
    width: 40px;
    height: 40px;
  }
`;
