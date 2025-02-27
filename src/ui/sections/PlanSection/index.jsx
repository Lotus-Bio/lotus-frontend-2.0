"use client";
import { StyledPlanSection, ContainerPlan } from "./planSection.style";
import TitleSection from "@/ui/components/TitleSection";
import SubtitleSection from "@/ui/components/SubtitleSection";
import { plans } from "@/data/plans";
import CardPlan from "@/ui/components/CardPlan";

const PlanSection = () => {
  return (
    <StyledPlanSection>
      <div className="container">
        <TitleSection>Choose Your Plan</TitleSection>
        <SubtitleSection>
          Select the perfect biodigester solution for your needs
        </SubtitleSection>
      </div>
      <ContainerPlan>
        {plans.map((plan, index) => {
          console.log(plan);
          return (
            <CardPlan
              key={index}
              title={plan.title}
              value={plan.value}
              description={plan.description}
              list={plan.items}
              popular={plan.popular}
            />
          );
        })}
      </ContainerPlan>
    </StyledPlanSection>
  );
};

export default PlanSection;
