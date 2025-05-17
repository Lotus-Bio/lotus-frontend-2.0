import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCalendarStore = create()(
  persist(
    (set, get) => ({
      events: [],
      addEvent: (event) =>
        set((state) => ({
          events: [...state.events, event],
        })),
      removeEvent: (eventToRemove) =>
        set((state) => ({
          events: state.events.filter(
            (e) =>
              !(e.date === eventToRemove.date && e.title === eventToRemove.title)
          ),
        })),
      clearEvents: () => set({ events: [] }),
    }),
    { name: "calendar-storage" }
  )
);
