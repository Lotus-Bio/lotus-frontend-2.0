"use client";
import { StyledFeatureSection, ContainerFeature } from "./featureSection.style";
import TitleSection from "@/ui/components/TitleSection";
import SubtitleSection from "@/ui/components/SubtitleSection";
import { features } from "@/data/features";
import CardFeature from "@/ui/components/CardFeature";

const FeatureSection = () => {
  return (
    <StyledFeatureSection>
      <div className="containerm">
        <TitleSection>
          Recursos inteligentes para gerenciamento de resíduos
        </TitleSection>
        <SubtitleSection>
          Nosso sistema inteligente vem com recursos para garantir desempenho
          ideal e facilidade de uso.
        </SubtitleSection>
      </div>
      <ContainerFeature>
        {features.map((feature, index) => {
          return (
            <CardFeature
              key={index}
              icon={<feature.icon />}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </ContainerFeature>
    </StyledFeatureSection>
  );
};

export default FeatureSection;
