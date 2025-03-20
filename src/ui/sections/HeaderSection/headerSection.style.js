import styled from "styled-components";
import Container from "@/ui/components/Container";

export const StyledHeaderSection = styled.header`
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(circle at center, #030712, #111827);
  display: flex;

  @media (max-width: 768px) {
    height: fit-content;
    padding: 5rem 1rem;
  }
`;

export const HeroContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContentSection = styled.div`
  opacity: 1;
  transform: none;
`;

export const ImageSection = styled.div`
  position: relative;
  opacity: 1;
  transform: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 24px;

  color: ${({ theme }) => theme.colors.lightGreen};
  font-weight: 600;
  font-size: 1rem;
`;

export const Title = styled.h1`
  font-size: 3.75rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  margin-bottom: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors.lightGreen};
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 1rem;
  line-height: 1.625;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    width: fit-content;
  }

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid rgb(31, 41, 55);
`;

export const CardImage = styled.img`
  border-radius: 8px;
  width: 100%;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  position: absolute;
  bottom: -16px;
  right: -16px;
  padding: 16px;
  background-color: rgb(17 24 39 / 0.5);
  border: 1px solid rgb(31, 41, 55);
  backdrop-filter: blur(4px);
  border-radius: 8px;
`;

export const CardText = styled.p`
  color: rgb(156, 163, 175);
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const CardValue = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;
