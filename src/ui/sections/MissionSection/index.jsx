"use client";
import { StyledMissionSection, ContainerMission } from "./missionSection.style";
import CardMission from "@/ui/components/CardMission";
import TitleSection from "@/ui/components/TitleSection";
import SubtitleSection from "@/ui/components/SubtitleSection";
import { missions } from "@/data/missions";

const MissionSection = () => {
  return (
    <StyledMissionSection id="mission">
      <div className="container">
        <TitleSection>Revolucionando a gestão de resíduos</TitleSection>
        <SubtitleSection>
          Manter um biodigestor eficiente pode ser um desafio. Dados
          inconsistentes e falta de monitoramento podem levar a problemas como
          baixa produção de biogás e odores indesejados. É por isso que criamos
          Lotus, um aplicativo inteligente que acompanha em tempo real os
          principais indicadores do seu sistema, ajudando você a otimizar o
          processo e gerar energia limpa com mais eficiência.
        </SubtitleSection>
      </div>
      <ContainerMission>
        {missions.map((mission, index) => {
          return (
            <CardMission
              key={index}
              icon={<mission.icon />}
              title={mission.title}
              description={mission.description}
            />
          );
        })}
      </ContainerMission>
    </StyledMissionSection>
  );
};

export default MissionSection;
