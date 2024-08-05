import { useQuery } from "@tanstack/react-query";

import { getPostComments } from "@/api/lib/getPostComments";
import { queryKeys } from "@/api/queryKeys";

export const useGetPostCommentsQuery = (postId: string) => {
  return useQuery({
    queryFn: () => getPostComments(postId),
    queryKey: [queryKeys.postComments, postId],
  });
};
