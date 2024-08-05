"use client";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

import { useErrorStore } from "@/store/ErrorStore";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: () => useErrorStore.getState().setMessage("Произошла ошибка"),
  }),
});

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
