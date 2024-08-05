"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { getPosts, QueryParams } from "@/api/lib/getPosts";
import { queryKeys } from "@/api/queryKeys";
import { usePostStore } from "@/store/PostStore";

export const useGetPostsQuery = (page: number, params?: QueryParams) => {
  const queryClient = useQueryClient();
  // console.log(queryClient.getQueryData([queryKeys.posts, page]), page);
  const response = useQuery({
    queryFn: () => getPosts(params),
    queryKey: [queryKeys.posts, page],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
  });

  useEffect(() => {
    usePostStore.getState().setId(response.data?.count);
  }, [response.data?.count]);

  return response;
};
