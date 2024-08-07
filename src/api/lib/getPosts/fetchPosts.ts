import { queryKeys } from "@/api/queryKeys";
import { LIMIT } from "@/constant";

import { getPosts } from "./getPosts";
import { FetchParams } from "./types";

export const fetchPosts = async ({ queryClient, page }: FetchParams) => {
  const pageNumber = page ? +page : 1;

  await queryClient.prefetchQuery({
    queryKey: [queryKeys.posts, pageNumber],
    queryFn: () =>
      getPosts({ _start: (pageNumber - 1) * LIMIT, _end: pageNumber * LIMIT }),
  });
};
