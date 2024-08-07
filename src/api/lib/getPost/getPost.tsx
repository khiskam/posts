import { axiosClient } from "@/api/axiosClient";
import { Post } from "@/model/Post";

export const getPost = async (id: number) => {
  const response = await axiosClient.get<Post>(`/posts/${id}`);

  return response.data;
};
