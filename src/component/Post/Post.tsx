import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { FC } from "react";

import { useGetPostQuery } from "@/api/hook/useGetPostQuery";
import Spinner from "@/component/Spinner";
import { IMAGE_API_URL } from "@/constant";

import withContainer from "../withContainer";
import { Box } from "./styles";
import { PostProps } from "./types";

const Post: FC<PostProps> = ({ postId }) => {
  const src = `${IMAGE_API_URL}?id=${postId}`;
  const { data, isLoading, isError } = useGetPostQuery(postId);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <Alert severity="error">
        Не получилось получить информацию о посте...
      </Alert>
    );
  }

  if (!data) {
    return <Alert severity="info">Информации по посту не найдено</Alert>;
  }

  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Stack useFlexGap gap={1} alignItems="start">
          <Typography variant="h2">{data.title}</Typography>
          <Typography>{data.body}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack alignItems="start">
          <Box position="relative" width="100%" height="400px">
            <Image
              loader={({ src, width }) => `${src}&w=${width}`}
              fill
              src={src}
              alt={data.title}
              style={{ objectFit: "contain" }}
              sizes="50vw"
              priority
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default withContainer(Post);
