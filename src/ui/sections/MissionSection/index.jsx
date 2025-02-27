"use client";
import { StyledMissionSection, ContainerMission } from "./missionSection.style";
import CardMission from "@/ui/components/CardMission";
import TitleSection from "@/ui/components/TitleSection";
import SubtitleSection from "@/ui/components/SubtitleSection";
import { missions } from "@/data/missions";

const MissionSection = () => {
  return (
    <StyledMissionSection>
      <div className="container">
        <TitleSection>Revolutionizing Waste Management</TitleSection>
        <SubtitleSection>
          Our mission is to transform organic waste into sustainable energy
          while reducing environmental impact through innovative biodigester
          technology.
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
