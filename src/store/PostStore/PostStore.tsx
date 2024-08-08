import { create } from "zustand";

import { PostActions, PostState } from "./types";

const initialState: PostState = {
  id: 0,
};

export const usePostStore = create<PostState & PostActions>((set) => ({
  ...initialState,

  setId: (count: number) => {
    set((state) => (state.id !== count ? { id: count + 1 } : state));
  },
}));
