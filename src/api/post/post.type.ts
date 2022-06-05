import { DETAIL_POST } from "../../models/post.model";
import { REVANUE } from "../../models/revanue.model";

export interface IResPostList {
  total: number;
  posts: Array<DETAIL_POST>;
}
export interface IResRevanue {
  total: number;
  result: REVANUE;
}
