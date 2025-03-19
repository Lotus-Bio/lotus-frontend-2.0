import styled from "styled-components";

export const StyledCardMission = styled.div`
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;

  max-width: 400px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  transition-duration: 150ms;

  &:hover {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const Icon = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.lightGreen};
    width: 48px;
    height: 48px;
  }
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.lightGreen};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;

  text-align: center;
`;

export const Description = styled.p`
  color: rgb(75, 85, 99);
  font-size: 1rem;
  line-height: inherit;

  text-align: center;
`;
