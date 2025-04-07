import styled from "styled-components";
import Container from "@/ui/components/Container";

export const StyledPlanSection = styled.section`
  padding: 6rem 0;
`;

export const ContainerPlan = styled(Container)`
  display: flex;
  gap: 2rem;
  align-items: stretch;
  justify-content: center;

  margin-top: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
