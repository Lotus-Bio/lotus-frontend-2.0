"use client";
import NoteItem from "@/ui/components/NoteItem";
import {
  Container,
  Header,
  Title,
  Description,
  Tag,
  BlockNotes,
} from "./notesPage.style";
import ModalBlur from "@/ui/components/ModalBlur";
import ProtectedRoute from "@/routes/protectedRoute";

export default function Notes() {
  return (
    <ProtectedRoute>
      <Container>
        <ModalBlur />
        <Header>
          <div>
            <Title>Notas</Title>
            <Description>
              Passo a passo das tarefas a serem executadas
            </Description>
          </div>

          <Tag>Sistema ativo</Tag>
        </Header>

        <BlockNotes>
          <NoteItem label="Instalação do biodigestor" />
          <NoteItem label="Adicionar matéria orgânica" />
          <NoteItem label="Monitorar a produção de biogás" />
          <NoteItem label="Verificar a temperatura do biodigestor:" />
        </BlockNotes>
      </Container>
    </ProtectedRoute>
  );
}
