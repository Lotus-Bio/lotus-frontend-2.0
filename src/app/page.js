"use client";
import { Leaf, Heart } from "lucide-react";
import Button from "@/ui/components/Button";
import SubtitleSection from "@/ui/components/SubtitleSection";
import TitleSection from "@/ui/components/TitleSection";
import CardMission from "@/ui/components/CardMission";
import CardFeature from "@/ui/components/CardFeature";
import CardPlan from "@/ui/components/CardPlan";

export default function Home() {
  return (
    <main>
      <TitleSection>Revolutionizing Waste Management</TitleSection>
      <SubtitleSection>
        Our mission is to transform organic waste into sustainable energy while
        reducing environmental impact through innovative biodigester technology.
      </SubtitleSection>
      <Button ghost={false}>
        Botão <Leaf />
      </Button>
      <Button ghost={true}>
        Botão <Leaf />
      </Button>
      <CardMission
        icon={<Heart />}
        title="Eco-Friendly Solution"
        description="Convert organic waste into renewable energy and nutrient-rich fertilizer, reducing landfill waste and greenhouse gas emissions."
      />
      <CardFeature
        icon={<Heart />}
        title="Eco-Friendly Solution"
        description="Convert organic waste into renewable energy and nutrient-rich fertilizer, reducing landfill waste and greenhouse gas emissions."
      />
      <CardPlan
        title="Starter"
        value="$2,999"
        description="Perfect for small farms and households"
        list={["item1", "item2", "item3", "item4", "item5", "item6"]}
        popular={true}
      />
      <CardPlan
        title="Starter"
        value="$2,999"
        description="Perfect for small farms and households"
        list={["item1", "item2", "item3", "item4", "item5", "item6"]}
        popular={false}
      />
    </main>
  );
}
