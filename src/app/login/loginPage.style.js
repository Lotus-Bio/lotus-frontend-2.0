import styled from "styled-components";
import Link from "next/link";

export const BackPage = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    color: ${({ theme }) => theme.colors.lightGreen};
  }

  p:hover {
    color: ${({ theme }) => theme.colors.buttonHoverGreen};
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 15px 20px ${({ theme }) => theme.colors.shadow},
    0 6px 12px ${({ theme }) => theme.colors.shadow};

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h2 {
    color: ${({ theme }) => theme.colors.darkGreen};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const LinkRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  a {
    color: ${({ theme }) => theme.colors.lightGreen};
    font-size: 1rem;
    font-weight: 600;
  }
`;
