"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { getPosts, QueryParams } from "@/api/lib/getPosts";
import { queryKeys } from "@/api/queryKeys";
import { usePostStore } from "@/store/PostStore";

export const useGetPostsQuery = (page: number, params?: QueryParams) => {
  const response = useQuery({
    queryFn: () => getPosts(params),
    queryKey: [queryKeys.posts, page],
  });

  useEffect(() => {
    if (response.data?.count) {
      usePostStore.getState().setId(response.data.count);
    }
  }, [response.data?.count]);

  return response;
};
