import { State } from ".";
import postApi from "../../api/post/postApi";
import { ENUM_POST_STATUS } from "../../constant/base.constant";
import { notifyError, notifySuccess } from "../../utils/notify";

type Actions = { setState: any; getState: () => State; dispatch: any };

export const getPostByIdAsync =
  (postId: string) =>
  async ({ setState, getState }: Actions) => {
    const result = await postApi.getPostById(postId);
    // console.log(result);
    if (result.status === 200) {
      setState({ ...getState(), postDetail: result.data });
      return;
    }
  };

export const getAllPostAsync =
  ({
    status,
    page,
    limit,
  }: {
    status: ENUM_POST_STATUS;
    page: number;
    limit: number;
  }) =>
  async ({ setState, getState }: Actions) => {
    const result = await postApi.getAllPost(status, page, limit);
    // console.log(`getAllPost`, result);
    if (result.status === 200) {
      setState({
        ...getState(),
        postList: result.data.posts,
        totalPost: result.data.total,
      });
      return;
    }
  };

export const updatePostStatusAsync =
  (postId: string, status: ENUM_POST_STATUS) =>
  async ({ setState, getState }: Actions) => {
    const result = await postApi.updatePost(postId, {
      post: { status: status },
    });
    // console.log(`getAllPost`, result);
    if (result.status === 200) {
      // copy list post ra
      const newList = [...getState().postList].filter(
        (item) => item._id !== postId
      );
      setState({ ...getState(), postList: newList });
      notifySuccess("Sucess");
      return;
    }
    notifyError("Error");
  };
