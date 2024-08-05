import { QueryClient } from "@tanstack/react-query";

import { Post } from "@/model/Post";

export type QueryParams = {
  _end: number;
  _start: number;
};

export type PostsResponse = {
  posts: Post[];
  count: number;
};

export type FetchParams = {
  queryClient: QueryClient;
  page: string | string[] | undefined;
};
