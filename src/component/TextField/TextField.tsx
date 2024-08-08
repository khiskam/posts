import MuiTextField from "@mui/material/TextField";
import { useId } from "react";
import { FieldValues, useController } from "react-hook-form";

import { TextFieldProps } from "./types";

const TextField = <T extends FieldValues>(props: TextFieldProps<T>) => {
  const id = useId();
  const { name, control, ...fieldProps } = props;
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <MuiTextField
      {...fieldProps}
      {...field}
      id={id}
      helperText={error?.message}
      error={!!error}
    />
  );
};

export default TextField;
