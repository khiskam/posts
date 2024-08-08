"use client";

import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useGetPostsQuery } from "@/api/hook/useGetPostsQuery";
import { PostCard } from "@/component/PostCard";
import { LIMIT } from "@/constant";

import withContainer from "../withContainer";
import { usePage } from "./hook";

const PostsList = () => {
  const { page, setPage } = usePage();

  const { data, isError } = useGetPostsQuery(page, {
    _start: (page - 1) * LIMIT,
    _end: page * LIMIT,
  });

  if (isError) {
    return (
      <Alert severity="error">
        Не получилось получить информацию о постах...
      </Alert>
    );
  }

  if (!data || data.posts.length === 0) {
    return (
      <Alert severity="info">Здесь пока нет постов. Но скоро появятся...</Alert>
    );
  }

  return (
    <Stack spacing={4} useFlexGap>
      <Typography variant="h2">Посты</Typography>

      <Grid container spacing={2}>
        {data.posts.map((post) => (
          <Grid item key={post.id} xs={12} md={6}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(data.count / LIMIT)}
        variant="outlined"
        color="primary"
        page={page}
        onChange={(_, page) => setPage(page)}
      />
    </Stack>
  );
};

export default withContainer(PostsList);
