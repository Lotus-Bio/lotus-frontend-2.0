import styled from "styled-components";
import Container from "@/ui/components/Container";

export const StyledMissionSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: 6rem 0;
`;

export const ContainerMission = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;
  justify-items: center;

  margin-top: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
