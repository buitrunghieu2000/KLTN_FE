import { State } from ".";
import postApi from "../../api/post/postApi";

type Actions = { setState: any; getState: () => State; dispatch: any };

export const getPostByIdAsync =
  (postId: string) =>
  async ({ setState, getState }: Actions) => {
    const result = await postApi.getPostById(postId);
    console.log(result);
    if (result.status === 200) {
      setState({ ...getState(), postDetail: result.data });
      return;
    }
  };
