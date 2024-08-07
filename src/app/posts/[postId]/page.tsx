import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

// import { getQueryClient } from "@/api/getQueryClient";
import { FetchParams, fetchPost } from "@/api/lib/getPost";
import { fetchPostComments } from "@/api/lib/getPostComments";
import PostData from "@/component/Post";
import PostCommentsList from "@/component/PostCommentsList";

import { PostPageProps } from "./types";

const Post = async ({ params }: PostPageProps) => {
  const queryClient = new QueryClient();
  const fetchParams: FetchParams = { queryClient, postId: +params.postId };

  await fetchPost(fetchParams);
  await fetchPostComments(fetchParams);

  return (
    <Stack divider={<Divider flexItem />} spacing={8} useFlexGap>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostData postId={params.postId} />
      </HydrationBoundary>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostCommentsList postId={params.postId} />
      </HydrationBoundary>
    </Stack>
  );
};

export default Post;
