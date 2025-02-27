import styled from "styled-components";
import Container from "@/ui/components/Container";

export const StyledFormSection = styled.section`
  padding: 6rem 0;
`;

export const ContainerForm = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;
  justify-items: center;

  margin-top: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BlockContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  max-width: 400px;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 400px;
  width: 100%;
`;
