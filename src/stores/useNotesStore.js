import { create } from "zustand";
import { persist } from "zustand/middleware";

const defaultNotes = [
  { id: "1", label: "Instalação do biodigestor", completed: false },
  { id: "2", label: "Adicionar matéria orgânica", completed: false },
  { id: "3", label: "Monitorar a produção de biogás", completed: false },
  { id: "4", label: "Verificar a temperatura do biodigestor", completed: false },
];

export const useNotesStore = create()(
  persist(
    (set, get) => ({
      notes: [],
      toggleNote: (id) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? { ...note, completed: !note.completed }
              : note
          ),
        })),
      initializeNotes: () => {
        // Só inicializa se estiver vazio
        if (get().notes.length === 0) {
          set({ notes: defaultNotes });
        }
      },
    }),
    { name: "notes-storage" }
  )
);
