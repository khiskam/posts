import { axiosClient } from "@/api/axiosClient";
import { PostComment } from "@/model/PostComment";

export const getPostComments = async (postId: number) => {
  const response = await axiosClient.get<PostComment[]>("/comments", {
    params: { postId },
  });

  return response.data;
};
