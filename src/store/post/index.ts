import { createHook, createStore } from "react-sweet-state";
import { DETAIL_POST } from "../../models/post.model";
import {
  getAllPostAsync,
  getPostByIdAsync,
  updatePostStatusAsync,
} from "./post.action";
import { selector } from "./post.selector";

export type State = {
  postList: Array<DETAIL_POST>;
  totalPost: number;
  postDetail: DETAIL_POST | undefined;
};

const initialState: State = {
  postList: [],
  totalPost: 0,
  postDetail: undefined,
};

const actions = { getPostByIdAsync, getAllPostAsync, updatePostStatusAsync };

const Store = createStore({
  initialState,
  actions,
});

const usePost = createHook(Store, { selector: selector });

export default usePost;
