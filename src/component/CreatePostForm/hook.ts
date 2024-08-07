"use client";

import { useRouter } from "next/navigation";

import { useCreatePostMutation } from "@/api/hook/useCreatePostMutation";
import { useErrorStore } from "@/store/ErrorStore";
import { usePostStore } from "@/store/PostStore";

import { PostSchema } from "./schema";

export const useSubmit = () => {
  const { mutateAsync, isPending } = useCreatePostMutation();
  const router = useRouter();
  const { id } = usePostStore(({ id }) => ({ id }));

  const onSubmit = async (data: PostSchema) => {
    try {
      await mutateAsync(data);

      router.push(`/posts/${id}`);
    } catch {
      useErrorStore.getState().setMessage("Не получилось добавить пост");
    }
  };

  return { onSubmit, isPending };
};
