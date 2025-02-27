"use client";
import { StyledFeatureSection, ContainerFeature } from "./featureSection.style";
import TitleSection from "@/ui/components/TitleSection";
import SubtitleSection from "@/ui/components/SubtitleSection";
import { features } from "@/data/features";
import CardFeature from "@/ui/components/CardFeature";

const FeatureSection = () => {
  return (
    <StyledFeatureSection>
      <div className="container">
        <TitleSection>Smart Features for Smart Waste Management</TitleSection>
        <SubtitleSection>
          Our Arduino-integrated biodigester comes packed with features to
          ensure optimal performance and ease of use.
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
