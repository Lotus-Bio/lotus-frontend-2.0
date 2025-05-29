import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

export const Header = styled.div`
  background: ${({ theme }) => theme.colors.darkActive};
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 0.875rem;
  line-height: 1%.25;
`;

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

export const ContainerAnalytics = styled.div`
  height: 100%;
  padding-bottom: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const BlockItemAnalytics = styled.div`
  height: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  }

  .container-metrics-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 950px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
`;

export const MetricsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.darkActive};
  border-radius: 1rem;
  padding: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  .icon {
    background: rgba(255, 255, 255, 0.05);
    padding: 0.75rem;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-weight: 500;
    font-size: 1rem;
    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: 0.875rem;
    margin: 0;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TitleItemAnalystics = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
`;
