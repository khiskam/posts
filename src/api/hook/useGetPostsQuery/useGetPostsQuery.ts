"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getPosts, QueryParams } from "@/api/lib/getPosts";
import { queryKeys } from "@/api/queryKeys";

export const useGetPostsQuery = (page: number, params?: QueryParams) => {
  const queryClient = useQueryClient();

  const response = useQuery({
    queryFn: () => getPosts(params),
    queryKey: [queryKeys.posts, page],
  });

  return response;
};
