import styled from "styled-components";

export const StyledModalBlur = styled.div`
  position: fixed;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  background: rgba(0, 0, 0, 0.5);
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
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;

  h3 {
    font-size: 1.25rem;
    color: white;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: rgb(156, 163, 175);
  }
`;

export const BlockIcon = styled.div`
  svg {
    color: #16a34a;
    width: 40px;
    height: 40px;
  }
`;
