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
import {
  Wind,
  Thermometer,
  Droplets,
  Activity,
  Zap,
  Clock,
} from "lucide-react";
import ProtectedRoute from "@/routes/protectedRoute";
import { useEffect, useState } from "react";
import { database, ref, onValue } from "@/lib/firebase";
import Loading from "@/ui/components/Loading";

export default function Dashboard() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
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

    setLoading(false);
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
              icon={<Droplets />}
              classify="Normal"
              title="Umidade"
              value={
                <span>
                  {dados.umidade}
                  <span
                    style={{ color: "rgb(209, 213, 219)", fontSize: "18px" }}
                  >
                    {" "}
                    %
                  </span>
                </span>
              }
            />

            <CardBioInfo
              icon={<Thermometer />}
              classify="Ideal"
              title="Temperatura"
              value={
                <span>
                  {dados.temperatura}
                  <span
                    style={{ color: "rgb(209, 213, 219)", fontSize: "18px" }}
                  >
                    {" "}
                    °C
                  </span>
                </span>
              }
            />

            <CardBioInfo
              icon={<Wind />}
              classify="Ótimo"
              title="Volume de gás"
              value={
                <span>
                  {dados.metano}
                  <span
                    style={{ color: "rgb(209, 213, 219)", fontSize: "18px" }}
                  >
                    {" "}
                    ppm
                  </span>
                </span>
              }
            />

            <CardBioInfo
              icon={<Activity />}
              classify="Ótimo"
              title="Produção de metano"
              value={
                <span>
                  {dados.producao_metano}
                  <span
                    style={{ color: "rgb(209, 213, 219)", fontSize: "18px" }}
                  >
                    {" "}
                    m³/dia
                  </span>
                </span>
              }
            />

            <CardBioInfo
              icon={<Zap />}
              classify="Ótimo"
              title="Eficiência energética"
              value={
                <span>
                  {dados.eficiencia_energetica}
                  <span
                    style={{ color: "rgb(209, 213, 219)", fontSize: "18px" }}
                  >
                    {" "}
                    %
                  </span>
                </span>
              }
            />

            <CardBioInfo
              icon={<Clock />}
              classify="Ótimo"
              title="Tempo de ciclo"
              value={
                <span>
                  {dados.tempo_ciclo}
                  <span
                    style={{ color: "rgb(209, 213, 219)", fontSize: "18px" }}
                  >
                    {" "}
                    dias
                  </span>
                </span>
              }
            />
          </BlockBioInfo>
        ) : (
          <Loading loading={loading} />
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
