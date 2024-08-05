import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
import { FieldValues, UseControllerProps } from "react-hook-form";

export type TextFieldProps<T extends FieldValues> = MuiTextFieldProps &
  UseControllerProps<T>;
