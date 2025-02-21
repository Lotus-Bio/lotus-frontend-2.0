"use client";
import { Leaf } from "lucide-react";
import Button from "@/ui/components/Button";
import SubtitleSection from "@/ui/components/SubtitleSection";
import TitleSection from "@/ui/components/TitleSection";

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
    </main>
  );
}
