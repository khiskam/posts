"use client";

import { useQuery } from "@tanstack/react-query";

import { axiosClient } from "@/api/axiosClient";
import { queryKeys } from "@/api/queryKeys";
import { Post } from "@/model/Post";

const getPost = async (id: string) => {
  const response = await axiosClient.get<Post>(`/posts/${id}`);

  return response.data;
};

export const useGetPostQuery = (id: string) => {
  return useQuery({
    queryFn: () => getPost(id),
    queryKey: [queryKeys.post, id],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
