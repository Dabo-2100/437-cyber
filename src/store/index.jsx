import { create } from "zustand";

export const sideMenuIndex = create(
    (set) => (
        {
            value: false,
            openMenu: () => set(() => ({ value: true })),
            closeMenu: () => set(() => ({ value: false }))
        }
    ))