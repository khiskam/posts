import { axiosClient } from "@/api/axiosClient";
import { Post } from "@/model/Post";

import { PostsResponse, QueryParams } from "./types";

export const getPosts = async (
  params?: QueryParams
): Promise<PostsResponse> => {
  const response = await axiosClient.get<Post[]>("/posts", { params });

  const count = +response.headers["x-total-count"];

  return { posts: response.data, count };
};
