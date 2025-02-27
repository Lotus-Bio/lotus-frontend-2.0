"use client";
import { Leaf, Heart, PhoneCall } from "lucide-react";
import Button from "@/ui/components/Button";
import SubtitleSection from "@/ui/components/SubtitleSection";
import TitleSection from "@/ui/components/TitleSection";
import CardMission from "@/ui/components/CardMission";
import CardFeature from "@/ui/components/CardFeature";
import CardPlan from "@/ui/components/CardPlan";
import Input from "@/ui/components/Input";
import ItemContact from "@/ui/components/ItemContact";
import Logo from "@/ui/components/Logo";
import HeaderSection from "@/ui/sections/HeaderSection";
import MissionSection from "@/ui/sections/MissionSection";
import FeatureSection from "@/ui/sections/FeatureSection";
import PlanSection from "@/ui/sections/PlanSection";
import FormSection from "@/ui/sections/FormSection";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <MissionSection />
      <FeatureSection />
      <PlanSection />
      <FormSection />
    </main>
  );
}
