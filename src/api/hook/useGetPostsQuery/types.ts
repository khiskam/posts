import { Post } from "@/model/Post";

export type QueryParams = {
  _end: number;
  _start: number;
};

export type PostsResponse = {
  posts: Post[];
  count: number;
};
