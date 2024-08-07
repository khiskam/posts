"use client";

import { useRouter } from "next/navigation";

import { useCreatePostMutation } from "@/api/hook/useCreatePostMutation";
import { NEW_POST_ID } from "@/constant/constant";
import { useErrorStore } from "@/store/ErrorStore";

import { PostSchema } from "./schema";

export const useSubmit = () => {
  const { mutateAsync, isPending } = useCreatePostMutation();
  const router = useRouter();

  const onSubmit = async (data: PostSchema) => {
    try {
      await mutateAsync(data);

      router.push(`/posts/${NEW_POST_ID}`);
    } catch {
      useErrorStore.getState().setMessage("Не получилось добавить пост");
    }
  };

  return { onSubmit, isPending };
};
