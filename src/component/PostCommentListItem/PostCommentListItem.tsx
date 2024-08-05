import Avatar from "@mui/material/Avatar";
import { grey } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC } from "react";

import { stringAvatar } from "./helpers";
import { PostCommentListItemProps } from "./types";

const CommentListItem: FC<PostCommentListItemProps> = ({
  comment,
  divider,
}) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar {...stringAvatar(comment.email)} />
        </ListItemAvatar>
        <ListItemText
          primary={comment.name}
          secondary={
            <Stack component="span">
              <Typography component="span" variant="body2" color="text.primary">
                {comment.body}
              </Typography>
              <Typography component="span" variant="caption" color={grey[400]}>
                {comment.email}
              </Typography>
            </Stack>
          }
        />
      </ListItem>
      {divider && <Divider variant="inset" component="li" />}
    </>
  );
};

export default CommentListItem;
