import axiosClient from "../axiosClient";
import { ReturnListReponse, ReturnReponse } from "../response.interface";
const commentsApi = {
  getComments(params: any): Promise<ReturnListReponse<any>> {
    const url = "comments/get-comments"; //params : page, filter
    return axiosClient.get(url, { params: params });
  },
  deleteComments(data: any): Promise<ReturnReponse<any>> {
    const url = "comments/delete-comments"; //params : page, filter
    return axiosClient.delete(url, data);
  },
};

export default commentsApi;
