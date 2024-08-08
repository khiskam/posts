import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createPost } from "@/api/lib/createPost";
import { queryKeys } from "@/api/queryKeys";
import { usePostStore } from "@/store/PostStore";

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();
  const id = usePostStore(({ id }) => id);

  return useMutation({
    mutationFn: createPost,

    onSuccess: ({ data: post }) => {
      queryClient.setQueryData([queryKeys.post, id], post);
    },
  });
};
