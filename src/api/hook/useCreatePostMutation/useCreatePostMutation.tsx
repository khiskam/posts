import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createPost } from "@/api/lib/createPost";
import { PostsResponse } from "@/api/lib/getPosts";
import { queryKeys } from "@/api/queryKeys";
import { usePostStore } from "@/store/PostStore";

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
      queryClient.setQueryData([queryKeys.post, id], post);
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
