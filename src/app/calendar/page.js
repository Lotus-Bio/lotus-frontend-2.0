"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ptLocale from "@fullcalendar/core/locales/pt-br";

import { Container } from "./calendarPage.style";
import ModalBlur from "@/ui/components/ModalBlur";

export default function Calendar() {
  return (
    <>
      <ModalBlur />
      <Container>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "Instalação do equipamento", date: "2025-03-03" },
            { title: "Início da captação", date: "2025-03-15" },
            { title: "Fim da captação", date: "2025-03-30" },
          ]}
          locale={ptLocale}
        />
      </Container>
    </>
  );
}
