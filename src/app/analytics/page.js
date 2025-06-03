"use client";
import {
  Container,
  Header,
  Title,
  Description,
  Tag,
  ContainerAnalytics,
  BlockItemAnalytics,
  MetricsItem,
  TitleItemAnalystics,
} from "./analyticsPage.style";
import {
  BatteryFull,
  Thermometer,
  Droplets,
  Activity,
  Zap,
  Clock,
} from "lucide-react";
import ProtectedRoute from "@/routes/protectedRoute";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Rectangle,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { dataLineChart, dataBarChart, dataPieChart } from "@/data/analytics";

export default function Analytcs() {
  return (
    <ProtectedRoute>
      <Container>
        <Header>
          <div>
            <Title>Analytics</Title>
            <Description>Análise detalhada do sistema</Description>
          </div>

          <Tag>Sistema ativo</Tag>
        </Header>

        <ContainerAnalytics>
          <BlockItemAnalytics>
            <TitleItemAnalystics>Produção de Biogás</TitleItemAnalystics>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataLineChart}>
                <CartesianGrid stroke="rgba(255, 255, 255, 0.1)" />
                <XAxis dataKey="name" stroke="#E5E7EB" />
                <YAxis stroke="#E5E7EB" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="producaoEstimada"
                  stroke="#6366F1"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="producaoReal"
                  stroke="#34D399"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </BlockItemAnalytics>

          <BlockItemAnalytics>
            <TitleItemAnalystics>Eficiência por Ciclo</TitleItemAnalystics>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataBarChart}>
                <CartesianGrid stroke="rgba(255, 255, 255, 0.1)" />
                <XAxis dataKey="name" stroke="#E5E7EB" />
                <YAxis stroke="#E5E7EB" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Bar dataKey="eficienciaPlanejada" fill="#6366F1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="eficienciaReal" fill="#34D399" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </BlockItemAnalytics>

          <BlockItemAnalytics>
            <TitleItemAnalystics>Distribuição de Recursos</TitleItemAnalystics>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={dataPieChart}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#6366F1"
                  label
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </BlockItemAnalytics>

          <BlockItemAnalytics>
            <TitleItemAnalystics>Métricas principais</TitleItemAnalystics>
            <div className="container-metrics-item">
              <MetricsItem>
                <div className="icon">
                  <BatteryFull size={24} color="#00ACC1" />
                </div>
                <div>
                  <h3>Capacidade</h3>
                  <p>73%</p>
                </div>
              </MetricsItem>

              <MetricsItem>
                <div className="icon">
                  <Thermometer size={24} color="#8884d8" />
                </div>
                <div>
                  <h3>Temperatura</h3>
                  <p>25 °C</p>
                </div>
              </MetricsItem>

              <MetricsItem>
                <div className="icon">
                  <Droplets size={24} color="#82ca9d" />
                </div>
                <div>
                  <h3>Umidade</h3>
                  <p>60%</p>
                </div>
              </MetricsItem>

              <MetricsItem>
                <div className="icon">
                  <Activity size={24} color="#8884d8" />
                </div>
                <div>
                  <h3>Atividade</h3>
                  <p>Alta</p>
                </div>
              </MetricsItem>

              <MetricsItem>
                <div className="icon">
                  <Zap size={24} color="#FFB74D" />
                </div>
                <div>
                  <h3>Energia</h3>
                  <p>120 kWh</p>
                </div>
              </MetricsItem>

              <MetricsItem>
                <div className="icon">
                  <Clock size={24} color="#BA68C8" />
                </div>
                <div>
                  <h3>Tempo Operação</h3>
                  <p>18h/dia</p>
                </div>
              </MetricsItem>
            </div>
          </BlockItemAnalytics>
        </ContainerAnalytics>
      </Container>
    </ProtectedRoute>
  );
}
