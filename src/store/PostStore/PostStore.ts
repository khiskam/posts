import { create } from "zustand";

import { LIMIT } from "@/constant";

import { PostActions, PostState } from "./types";

const initialState: PostState = { id: 0, page: 0, actualPage: 0 };

export const getPage = (id: number) => {
  return Math.ceil(id / LIMIT);
};

export const usePostStore = create<PostState & PostActions>((set) => ({
  ...initialState,

  setId: (id?: number) =>
    set((state) => {
      if (!state.id && id) {
        const i = id + 1;

        return { id: i, page: getPage(id), actualPage: getPage(i) };
      }

      return state;
    }),

  increment: () =>
    set(({ id }) => {
      const i = id + 1;

      return { id: i, page: getPage(id), actualPage: getPage(i) };
    }),
}));
