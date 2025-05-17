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
import { Wind, Thermometer, Droplets, Activity, Zap, Clock } from "lucide-react";
import ProtectedRoute from "@/routes/protectedRoute";
import { PieChart, Pie, BarChart, Bar, Rectangle, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={dataLineChart}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </BlockItemAnalytics>

          <BlockItemAnalytics>
            <TitleItemAnalystics>Eficiência por Ciclo</TitleItemAnalystics>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={dataBarChart}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
            </ResponsiveContainer>
          </BlockItemAnalytics>

          <BlockItemAnalytics>
            <TitleItemAnalystics>Distribuição de Recursos</TitleItemAnalystics>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={dataPieChart}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </BlockItemAnalytics>

          <BlockItemAnalytics>
            <TitleItemAnalystics>Métricas principais</TitleItemAnalystics>
            <MetricsItem>
              <Wind size={40} color="#4CAF50" />
              <div>
                <h3>Vento</h3>
                <p>15 km/h</p>
              </div>
            </MetricsItem>
            <MetricsItem>
              <Thermometer size={40} color="#FF9800" />
              <div>
                <h3>Temperatura</h3>
                <p>25 °C</p>
              </div>
            </MetricsItem>
            <MetricsItem>
              <Droplets size={40} color="#2196F3" />
              <div>
                <h3>Umidade</h3>
                <p>60%</p>
              </div>
            </MetricsItem>
            <MetricsItem>
              <Activity size={40} color="#9C27B0" />
              <div>
                <h3>Atividade</h3>
                <p>Alta</p>
              </div>
            </MetricsItem>
          </BlockItemAnalytics>
        </ContainerAnalytics>
      </Container>
    </ProtectedRoute>
  );
}
