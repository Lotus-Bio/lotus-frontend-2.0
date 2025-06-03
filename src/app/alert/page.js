"use client";
import ProtectedRoute from "@/routes/protectedRoute";
import {
  Container,
  Header,
  Title,
  Description,
  Tag,
} from "./alertPage.style";
export default function Alert() {

  return (
    <ProtectedRoute>
      <Container>
        <Header>
          <div>
            <Title>Alertas</Title>
            <Description>Avisos do sistema em tempo real</Description>
          </div>

          <Tag>Sistema ativo</Tag>
        </Header>
      </Container>
    </ProtectedRoute>
  );
}
