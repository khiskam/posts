import { queryKeys } from "@/api/queryKeys";

import { getPost } from "./getPost";
import { FetchParams } from "./types";

export const fetchPost = async ({ queryClient, postId }: FetchParams) => {
  await queryClient.prefetchQuery({
    queryKey: [queryKeys.post, postId],
    queryFn: () => getPost(postId),
  });
};
