import axiosClient from "../axiosClient";

// interface Data {
//   email: String;
//   password: Number;
// }
const postApi = {
  getPostById(id: string) {
    const url = `post/find-post/?postId=${id}`; //params : page, filter
    return axiosClient.get(url);
  },
};

export default postApi;
