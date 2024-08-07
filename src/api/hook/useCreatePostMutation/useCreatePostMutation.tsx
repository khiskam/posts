import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createPost } from "@/api/lib/createPost";
import { queryKeys } from "@/api/queryKeys";
import { NEW_POST_ID } from "@/constant/constant";

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,

    onSuccess: ({ data: post }) => {
      queryClient.setQueryData([queryKeys.post, NEW_POST_ID], post);
    },
  });
};
