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
import { useEffect, useState } from "react";
import { database, ref, onValue } from "@/lib/firebase";

export default function Dashboard() {
  const [dados, setDados] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const usuarioRef = ref(database, "usuarios"); // Caminho no Realtime Database

    // Escutando mudanças em tempo real
    const unsubscribe = onValue(usuarioRef, (snapshot) => {
      if (snapshot.exists()) {
        const usuariosData = snapshot.val();
        const [id, user] = Object.entries(usuariosData)[0]; // Pegando o único usuário
        setDados(user.dados);
      } else {
        setDados(null);
      }
    });

    // Cleanup: remove listener ao desmontar o componente
    return () => unsubscribe();
  }, []);

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

        {dados ? (
          <BlockBioInfo>
            <CardBioInfo
              icon={<Wind />}
              classify="Normal"
              title="Umidade"
              value={dados.umidade + " %"}
            />

            <CardBioInfo
              icon={<Thermometer />}
              classify="Ideal"
              title="Temperatura"
              value={dados.temperatura + " °C"}
            />

            <CardBioInfo
              icon={<Droplets />}
              classify="Ótimo"
              title="Volume de gás"
              value={dados.metano + " ppm"}
            />
          </BlockBioInfo>
        ) : (
          <p>Carregando dados...</p>
        )}

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
