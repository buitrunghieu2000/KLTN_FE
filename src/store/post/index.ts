import { createHook, createStore } from "react-sweet-state";
import { DETAIL_POST } from "../../models/post.model";
import { REVANUE } from "../../models/revanue.model";
import {
  getAllPostAsync,
  getPostByIdAsync,
  updatePostStatusAsync,
  getRevanueAsync,
} from "./post.action";
import { selector } from "./post.selector";

export type State = {
  postList: Array<DETAIL_POST>;
  totalPost: number;
  postDetail: DETAIL_POST | undefined;
  revanue: REVANUE | undefined;
  totalRevanue: number;
};

const initialState: State = {
  postList: [],
  totalPost: 0,
  postDetail: undefined,
  revanue: undefined,
  totalRevanue: 0,
};

const actions = {
  getPostByIdAsync,
  getAllPostAsync,
  updatePostStatusAsync,
  getRevanueAsync,
};

const Store = createStore({
  initialState,
  actions,
});

const usePost = createHook(Store, { selector: selector });

export default usePost;
