"use client";
import ProtectedRoute from "@/routes/protectedRoute";
import AlertCard from "@/ui/components/AlertCard";
import {
  Container,
  Header,
  Title,
  Description,
  Tag,
  Content,
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

        <Content>
          <AlertCard
            type="error"
            title="Sistema em funcionamento"
            description="Todos os parâmetros estão dentro dos limites ideais."
            time={new Date().toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />

          <AlertCard
            type="warning"
            title="Sistema em funcionamento"
            description="Todos os parâmetros estão dentro dos limites ideais."
            time={new Date().toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />

          <AlertCard
            type="success"
            title="Sistema em funcionamento"
            description="Todos os parâmetros estão dentro dos limites ideais."
            time={new Date().toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        </Content>
      </Container>
    </ProtectedRoute>
  );
}
