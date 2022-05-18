import { State } from ".";

export const selector = (state: State) => {
  return {
    postList: state.postList,
    postDetail: state.postDetail,
  };
};
