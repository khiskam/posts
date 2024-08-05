import { InferType, object, string } from "yup";

export const schema = object({
  title: string()
    .required("Поле Наименование обязательно для заполнения")
    .max(64, "Максимальная длина поля 64 символа"),
  body: string()
    .required("Поле Описание обязательно для заполнения")
    .max(255, "Максимальная длина поля 255 символа"),
});

export type PostSchema = InferType<typeof schema>;
