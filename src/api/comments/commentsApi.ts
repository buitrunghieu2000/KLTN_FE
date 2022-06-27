import axiosClient from "../axiosClient";
import { ReturnListReponse, ReturnReponse } from "../response.interface";
const commentsApi = {
  getComments(params: any): Promise<ReturnListReponse<any>> {
    const url = "comments/get-comments"; //params : page, filter
    return axiosClient.get(url, { params: params });
  },
};

export default commentsApi;
