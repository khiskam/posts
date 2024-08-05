import { Post } from "@/model/Post";

export type PostRequestBody = Omit<Post, "id">;
