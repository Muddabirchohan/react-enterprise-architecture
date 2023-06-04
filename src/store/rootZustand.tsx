import { create } from 'zustand'

export const useDrawerStore = create((set) => ({
  drawerState: false,
  setDrawerState: () => set(({drawerState}) => ({ drawerState : !drawerState  })),
}))