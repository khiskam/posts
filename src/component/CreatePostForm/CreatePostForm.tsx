import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";

import TextField from "@/component/TextField";

import withContainer from "../withContainer";
import { useSubmit } from "./hook";
import { PostSchema, schema } from "./schema";
import { Box } from "./styles";

const CreatePostForm = () => {
  const onSubmit = useSubmit();

  const { handleSubmit, control } = useForm<PostSchema>({
    defaultValues: { title: "", body: "" },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <>
      <Stack spacing={4} useFlexGap>
        <Typography variant="h2">Добавить пост</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField<PostSchema>
            control={control}
            name="title"
            label="Наименование"
            variant="outlined"
            fullWidth
          />
          <TextField<PostSchema>
            control={control}
            name="body"
            label="Описание"
            variant="outlined"
            fullWidth
            multiline
            minRows={2}
          />

          <Button variant="contained" type="submit">
            Отправить
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default withContainer(CreatePostForm);
