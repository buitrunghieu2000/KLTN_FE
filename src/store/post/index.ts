import { createHook, createStore } from "react-sweet-state";
import { selector } from "./post.selector";
import { getPostByIdAsync } from "./post.action";
import { POST_MODEL } from "../../models/post.model";

export type State = {
  postList: Array<POST_MODEL>;
  postDetail: POST_MODEL | undefined;
};

const initialState: State = {
  postList: [],
  postDetail: undefined,
};

const actions = { getPostByIdAsync };

const Store = createStore({
  initialState,
  actions,
});

const usePost = createHook(Store, { selector: selector });

export default usePost;
