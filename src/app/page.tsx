import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { fetchPosts } from "@/api/lib/getPosts";
import CreatePostForm from "@/component/CreatePostForm";
import PostsList from "@/component/PostsList";

import { PageProps } from "./types";

const Home = async ({ searchParams }: PageProps) => {
  const queryClient = new QueryClient();
  await fetchPosts({ queryClient, page: searchParams.page });

  return (
    <Stack divider={<Divider flexItem />} spacing={8} useFlexGap>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostsList />
      </HydrationBoundary>
      <CreatePostForm />
    </Stack>
  );
};

export default Home;
