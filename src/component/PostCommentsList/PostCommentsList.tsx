"use client";

import Alert from "@mui/material/Alert";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useGetPostCommentsQuery } from "@/api/hook/useGetPostCommentsQuery";

import PostCommentListItem from "../PostCommentListItem";
import withContainer from "../withContainer";
import { PostCommentsListProps } from "./types";

const PostCommentsList = ({ postId }: PostCommentsListProps) => {
  const { data, isError } = useGetPostCommentsQuery(postId);

  if (isError) {
    return (
      <Alert severity="error">
        Не получилось получить комментарии о посте...
      </Alert>
    );
  }

  if (!data || data.length === 0) {
    return <Alert severity="info">Комментариев не найдено...</Alert>;
  }

  return (
    <Stack spacing={4} useFlexGap>
      <Typography variant="h2">Комментарии</Typography>

      <List>
        {data.map((comment, idx) => (
          <PostCommentListItem
            comment={comment}
            divider={idx < data.length - 1}
            key={comment.id}
          />
        ))}
      </List>
    </Stack>
  );
};

export default withContainer(PostCommentsList);
