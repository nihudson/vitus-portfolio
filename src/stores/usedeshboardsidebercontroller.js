import { create } from "zustand";

const usedeshboardsidebercontroller = create((set) => ({
    isSideberOpen: true,
    setisSideberOpen: (open) => set({ isSideberOpen: open }),
    toggleSidebar: () => set((state) => ({ isSideberOpen: !state.isSideberOpen })),
}));

export default usedeshboardsidebercontroller;