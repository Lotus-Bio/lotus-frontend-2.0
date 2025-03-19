import styled from "styled-components";

export const StyledCardPlan = styled.div`
  position: relative;
  border: ${({ $popular, theme }) =>
    $popular ? `2px solid ${theme.colors.lightGreen}` : "none"};

  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 320px;
  width: 100%;
`;

export const IndicadoBlock = styled.div`
  display: ${({ $popular }) => ($popular ? "block" : "none")};
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 0.875rem;
`;

export const Title = styled.h4`
  color: rgb(44, 92, 36);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Value = styled.h5`
  color: ${({ theme }) => theme.colors.lightGreen};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: rgb(75, 85, 99);
  font-size: 1rem;
  line-height: inherit;
  text-align: center;
`;

export const List = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListItem = styled.p`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  color: rgb(75, 85, 99);
  font-size: 1rem;
  line-height: inherit;
`;
