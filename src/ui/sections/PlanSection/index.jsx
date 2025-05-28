"use client";
import { StyledPlanSection, ContainerPlan } from "./planSection.style";
import TitleSection from "@/ui/components/TitleSection";
import SubtitleSection from "@/ui/components/SubtitleSection";
import { plans } from "@/data/plans";
import CardPlan from "@/ui/components/CardPlan";

const PlanSection = ({ setMessage }) => {
  return (
    <StyledPlanSection id="plan">
      <div className="container">
        <TitleSection>Escolha seu plano</TitleSection>
        <SubtitleSection dark>
          Selecione a solução perfeita para suas necessidades
        </SubtitleSection>
      </div>
      <ContainerPlan>
        {plans.map((plan, index) => {
          return (
            <CardPlan
              key={index}
              title={plan.title}
              value={plan.value}
              description={plan.description}
              list={plan.items}
              popular={plan.popular}
              message={plan.message}
              setMessage={setMessage}
            />
          );
        })}
      </ContainerPlan>
    </StyledPlanSection>
  );
};

export default PlanSection;
