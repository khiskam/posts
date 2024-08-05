"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { axiosClient } from "@/api/axiosClient";
import { queryKeys } from "@/api/queryKeys";
import { Post } from "@/model/Post";
import { usePostStore } from "@/store/PostStore";

import { PostsResponse, QueryParams } from "./types";

const getPosts = async (params?: QueryParams): Promise<PostsResponse> => {
  const response = await axiosClient.get<Post[]>("/posts", { params });

  const count = +response.headers["x-total-count"];

  return { posts: response.data, count };
};

export const useGetPostsQuery = (page: number, params?: QueryParams) => {
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
