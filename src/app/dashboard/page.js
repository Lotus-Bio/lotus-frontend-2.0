"use client";
import CardBioInfo from "@/ui/components/CardBioInfo";
import {
  Container,
  Header,
  Title,
  Description,
  Tag,
  BlockBioInfo,
  UserInfo,
} from "./dashboardPage.style";
import { useAuth } from "@/context/AuthContext";
import { Wind, Thermometer, Droplets } from "lucide-react";
import ProtectedRoute from "@/routes/protectedRoute";

export default function Dashboard() {
  const { user } = useAuth();

  console.log(user);
  return (
    <ProtectedRoute>
      <Container>
        <Header>
          <div>
            <Title>Dashboard</Title>
            <Description>Monitoramento em tempo real</Description>
          </div>

          <Tag>Sistema ativo</Tag>
        </Header>

        <BlockBioInfo>
          <CardBioInfo
            icon={<Wind />}
            classify="Normal"
            title="Umidade"
            value="70,00 %"
          />

          <CardBioInfo
            icon={<Thermometer />}
            classify="Ideal"
            title="Temperatura"
            value="19.0 °C"
          />

          <CardBioInfo
            icon={<Droplets />}
            classify="Ótimo"
            title="Volume de gás"
            value="115 ppm"
          />
        </BlockBioInfo>

        <UserInfo>
          {user && (
            <>
              <p>{user.displayName}</p>
              <p>{user.email}</p>
            </>
          )}
        </UserInfo>
      </Container>
    </ProtectedRoute>
  );
}
