"use client";
import { useEffect } from "react";
import { useNotesStore } from "@/stores/useNotesStore";
import NoteItem from "@/ui/components/NoteItem";
import {
  Container,
  Header,
  Title,
  Description,
  Tag,
  BlockNotes,
} from "./notesPage.style";
import ProtectedRoute from "@/routes/protectedRoute";

export default function Notes() {
  const { notes, toggleNote, initializeNotes } = useNotesStore();

  useEffect(() => {
    initializeNotes();
  }, []);

  return (
    <ProtectedRoute>
      <Container>
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
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              label={note.label}
              completed={note.completed}
              onToggle={() => toggleNote(note.id)}
            />
          ))}
        </BlockNotes>
      </Container>
    </ProtectedRoute>
  );
}
