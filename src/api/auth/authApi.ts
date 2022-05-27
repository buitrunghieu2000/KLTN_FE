import { ADMIN_MODEL, USER_MODEL } from "../../models/user.model";
import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";
import { IReqBlockUser, IReqLogin } from "./auth.interface";
import { IResLogin, IResUserList } from "./auth.type";

const authApi = {
  login(data: IReqLogin): Promise<ReturnReponse<IResLogin>> {
    const url = "auth/login"; //params : page, filter
    return axiosClient.post(url, data);
  },

  getUser(): Promise<ReturnReponse<USER_MODEL>> {
    const url = "auth/get-auth"; //params : page, filter
    return axiosClient.get(url);
  },

  getAllUser(
    page: number,
    limit: number
  ): Promise<ReturnReponse<IResUserList>> {
    const url = `admin/get-all-user?page=${page}&limit=${limit}`; //params : page, filter
    return axiosClient.get(url);
  },

  lockUser(data: IReqBlockUser): Promise<ReturnReponse<any>> {
    const url = `admin/block-user`; //params : page, filter
    return axiosClient.put(url, data);
  },
};

export default authApi;
