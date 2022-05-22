import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";
import { IResPostList } from "./post.type";

const postApi = {
  getPostById(id: string) {
    const url = `post/find-post/?postId=${id}`; //params : page, filter
    return axiosClient.get(url);
  },
  getAllPost(
    status: number,
    page: number,
    limit: number
  ): Promise<ReturnReponse<IResPostList>> {
    const url = `post/get-all-post?status=${status}&page=${page}&limit=${limit}`; //params : page, filter
    return axiosClient.get(url);
  },
  updatePost(id: String, data: any) {
    const url = `post/update-post?postId=${id}`; //params : page, filter
    return axiosClient.put(url, data);
  },
};

export default postApi;
