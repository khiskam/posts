"use client";

import {
  isServer,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

import { useErrorStore } from "@/store/ErrorStore";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: Infinity,
        // gcTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
    // queryCache: new QueryCache({
    //   onError: () => useErrorStore.getState().setMessage("Произошла ошибка"),
    // }),
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
