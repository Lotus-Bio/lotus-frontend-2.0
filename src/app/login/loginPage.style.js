import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h2 {
    color: rgb(44, 92, 36);
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
    color: rgb(92, 156, 84);
    font-size: 1rem;
    font-weight: 600;
  }
`;
