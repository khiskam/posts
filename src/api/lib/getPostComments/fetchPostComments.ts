import { queryKeys } from "@/api/queryKeys";

import { getPostComments } from "./getPostComments";
import { FetchParams } from "./types";

export const fetchPostComments = async ({
  queryClient,
  postId,
}: FetchParams) => {
  await queryClient.prefetchQuery({
    queryKey: [queryKeys.postComments, postId],
    queryFn: () => getPostComments(postId),
  });
};
