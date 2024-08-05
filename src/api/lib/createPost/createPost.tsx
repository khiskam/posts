import { axiosClient } from "@/api/axiosClient";
import { Post } from "@/model/Post";

import { PostRequestBody } from "./types";

export const createPost = async (body: PostRequestBody) => {
  return await axiosClient.post<Post>("/posts", { ...body, userId: 1 });
};
