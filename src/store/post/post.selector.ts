import { State } from ".";

export const selector = (state: State) => {
  return {
    postList: state.postList,
    totalPost: state.totalPost,
    postDetail: state.postDetail,
    revanue: state.revanue,
    totalrevanue: state.totalRevanue,
  };
};
