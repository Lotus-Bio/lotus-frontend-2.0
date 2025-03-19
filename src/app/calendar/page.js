"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ptLocale from "@fullcalendar/core/locales/pt-br";

import {
  Container,
  Header,
  Title,
  Description,
  Tag,
} from "./calendarPage.style";
import ModalBlur from "@/ui/components/ModalBlur";

export default function Calendar() {
  return (
    <>
      <ModalBlur />
      <Container>
        <Header>
          <div>
            <Title>Calendário</Title>
            <Description>Salve os avanços diários do biodigestor</Description>
          </div>

          <Tag>Sistema ativo</Tag>
        </Header>
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
