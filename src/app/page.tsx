"use client";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Suspense } from "react";

import CreatePostForm from "@/component/CreatePostForm";
import PostsList from "@/component/PostsList";

const Home = () => {
  return (
    <Stack divider={<Divider flexItem />} spacing={8} useFlexGap>
      <Suspense>
        <PostsList />
      </Suspense>
      <CreatePostForm />
    </Stack>
  );
};

export default Home;
