import { QueryClient } from "@tanstack/react-query";

export type FetchParams = {
  queryClient: QueryClient;
  postId: string;
};
