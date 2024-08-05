import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";

import { Card, CardBody, CardContent } from "./styles";
import { PostCardProps } from "./types";

export const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Card>
      <CardContent>
        <Typography noWrap variant="h6" gutterBottom component="p">
          {post.title}
        </Typography>
        <CardBody variant="body2" component="p">
          {post.body}
        </CardBody>
      </CardContent>
      <CardActions>
        <Button href={`/posts/${post.id}`} component={Link} size="small">
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};
