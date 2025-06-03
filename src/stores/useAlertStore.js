import { create } from "zustand";

export const useAlertStore = create((set) => ({
  alertas: [],
  addAlertas: (novos) =>
    set((state) => {
      const existentes = new Set(state.alertas.map((a) => a.id));
      const filtrados = novos.filter((a) => !existentes.has(a.id));
      return { alertas: [...state.alertas, ...filtrados] };
    }),
  removerAlerta: (id) =>
    set((state) => ({
      alertas: state.alertas.filter((a) => a.id !== id),
    })),
  limparTodos: () => set({ alertas: [] }),
}));
