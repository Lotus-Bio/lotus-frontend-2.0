"use client";
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

import { useCalendarStore } from "@/stores/useCalendarStore";

export default function Calendar() {
  const events = useCalendarStore((state) => state.events);
  const addEvent = useCalendarStore((state) => state.addEvent);
  const removeEvent = useCalendarStore((state) => state.removeEvent);

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
      addEvent({ title, date: info.dateStr });
      Swal.fire("Adicionado!", `Evento "${title}" foi criado.`, "success");
    }
  };

  const handleEventClick = async (clickInfo) => {
    const event = clickInfo.event;
    const result = await Swal.fire({
      title: "Remover evento?",
      text: `Deseja remover o evento "${event.title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, remover",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      removeEvent({ title: event.title, date: event.startStr });
      Swal.fire("Removido!", "Evento removido com sucesso.", "success");
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
          eventClick={handleEventClick}
        />
      </Container>
    </ProtectedRoute>
  );
}
