import { create } from "zustand";

const useLan = create((set) => ({
    ln: "fr",
    setln: (l) => set({ ln: l }),
}));

export default useLan;