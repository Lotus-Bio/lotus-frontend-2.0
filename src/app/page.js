"use client";
import { Leaf } from "lucide-react";
import Button from "@/ui/components/Button";

export default function Home() {
  return (
    <main>
      <div>Hello World!</div>
      <Button ghost={false}>
        Botão <Leaf />
      </Button>
      <Button ghost={true}>
        Botão <Leaf />
      </Button>
    </main>
  );
}
