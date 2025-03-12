import styled from "styled-components";
import Container from "@/ui/components/Container";

export const StyledFeatureSection = styled.section`
  padding: 6rem 0;
`;

export const ContainerFeature = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;
  justify-items: center;

  margin-top: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
