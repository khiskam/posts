import { useMutation, useQueryClient } from "@tanstack/react-query";

import { axiosClient } from "@/api/axiosClient";
import { queryKeys } from "@/api/queryKeys";
import { Post } from "@/model/Post";
import { usePostStore } from "@/store/PostStore";

import { PostsResponse } from "../useGetPostsQuery";
import { PostRequestBody } from "./types";

export const createPost = async (body: PostRequestBody) => {
  return await axiosClient.post<Post>("/posts", { ...body, userId: 1 });
};

export const useCreatePostMutation = () => {
  const { increment, id, actualPage } = usePostStore(
    ({ increment, id, actualPage }) => ({
      increment,
      id,
      actualPage,
    })
  );

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: ({ data: post }) => {
      queryClient.setQueryData([queryKeys.post, id.toString()], post);
      queryClient.setQueryData(
        [queryKeys.posts, actualPage],
        (prev: PostsResponse): PostsResponse => ({
          posts: prev ? [...prev.posts, post] : [post],
          count: id,
        })
      );
      increment();
    },
  });
};
