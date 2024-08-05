"use client";

import { useQuery } from "@tanstack/react-query";

import { axiosClient } from "@/api/axiosClient";
import { queryKeys } from "@/api/queryKeys";
import { Comment } from "@/model/Comment";

const getPostComments = async (postId: string) => {
  const response = await axiosClient.get<Comment[]>("/comments", {
    params: { postId },
  });

  return response.data;
};

export const useGetPostCommentsQuery = (postId: string) => {
  return useQuery({
    queryFn: () => getPostComments(postId),
    queryKey: [queryKeys.postComments, postId],
  });
};
