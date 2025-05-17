"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptLocale from "@fullcalendar/core/locales/pt-br";
import Swal from "sweetalert2";

import {
  Container,
  Header,
  Title,
  Description,
  Tag,
} from "./calendarPage.style";
import ProtectedRoute from "@/routes/protectedRoute";

export default function Calendar() {
  const [events, setEvents] = useState([]);

  const handleDateClick = async (info) => {
    const { value: title } = await Swal.fire({
      title: "Novo evento",
      input: "text",
      inputLabel: "Título do evento",
      inputPlaceholder: "Digite o nome do evento",
      showCancelButton: true,
      confirmButtonText: "Salvar",
      cancelButtonText: "Cancelar",
    });

    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
      Swal.fire("Adicionado!", `Evento "${title}" foi criado.`, "success");
    }
  };

  return (
    <ProtectedRoute>
      <Container>
        <Header>
          <div>
            <Title>Calendário</Title>
            <Description>Salve os avanços diários do biodigestor</Description>
          </div>
          <Tag>Sistema ativo</Tag>
        </Header>

        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          locale={ptLocale}
          dateClick={handleDateClick}
        />
      </Container>
    </ProtectedRoute>
  );
}