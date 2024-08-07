"use client";

import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import { useGetPostsQuery } from "@/api/hook/useGetPostsQuery";
import { PostCard } from "@/component/PostCard";
import { LIMIT } from "@/constant";
import { usePostStore } from "@/store/PostStore";

import withContainer from "../withContainer";
import { usePage } from "./hook";

const PostsList = () => {
  const { page, setPage } = usePage();
  const { page: pagesCount } = usePostStore(({ page }) => ({ page }));

  const { data, isError, isFetching } = useGetPostsQuery(page, {
    _start: (page - 1) * LIMIT,
    _end: page * LIMIT,
  });

  console.log(isFetching);

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

      {/* <Link href={"?page=1"}>1</Link>
      <Link href={"?page=2"}>2</Link>
      <Link href={"?page=6"}>6</Link> */}

      <Pagination
        count={pagesCount}
        variant="outlined"
        color="primary"
        page={page}
        onChange={(_, page) => setPage(page)}
      />
    </Stack>
  );
};

export default withContainer(PostsList);
