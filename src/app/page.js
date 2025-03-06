"use client";
import { useState } from "react";
import HeaderSection from "@/ui/sections/HeaderSection";
import MissionSection from "@/ui/sections/MissionSection";
import FeatureSection from "@/ui/sections/FeatureSection";
import PlanSection from "@/ui/sections/PlanSection";
import FormSection from "@/ui/sections/FormSection";

export default function Home() {
  const [message, setMessage] = useState("");
  return (
    <main>
      <HeaderSection />
      <MissionSection />
      <FeatureSection />
      <PlanSection setMessage={setMessage} />
      <FormSection message={message} setMessage={setMessage} />
    </main>
  );
}
