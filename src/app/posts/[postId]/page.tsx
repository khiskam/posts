"use client";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import PostData from "@/component/Post";
import PostCommentsList from "@/component/PostCommentsList";

const Post = ({ params }: { params: { postId: string } }) => {
  return (
    <Stack divider={<Divider flexItem />} spacing={8} useFlexGap>
      <PostData postId={params.postId} />
      <PostCommentsList postId={params.postId} />
    </Stack>
  );
};

export default Post;
