import { DETAIL_POST } from "../../models/post.model";

export interface IResPostList {
  total: number;
  posts: Array<DETAIL_POST>;
}
