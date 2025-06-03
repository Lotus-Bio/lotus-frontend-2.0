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
import { useAlertStore } from "@/stores/useAlertStore";

export default function Alert() {
  const { alertas } = useAlertStore();

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
          {[...alertas]
            .sort((a, b) => b.time - a.time)
            .map((alerta) => (
              <AlertCard
                key={alerta.id}
                id={alerta.id}
                type={alerta.type}
                title={alerta.title}
                description={alerta.description}
                time={new Date(alerta.time).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              />
            ))}
        </Content>
      </Container>
    </ProtectedRoute>
  );
}
