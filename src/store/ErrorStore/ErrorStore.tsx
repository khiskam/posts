import { create } from "zustand";

import { ErrorActions, ErrorState } from "./types";

const initialState: ErrorState = {
  message: undefined,
};

export const useErrorStore = create<ErrorState & ErrorActions>((set) => ({
  ...initialState,
  setMessage: (message: string) => set(() => ({ message })),
  clearMessage: () => set(() => ({ message: undefined })),
}));
