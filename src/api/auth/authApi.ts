import { USER_MODEL } from "../../models/user.model";
import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";
import { IReqLogin } from "./auth.interface";
import { IResLogin } from "./auth.type";

const authApi = {
  login(data: IReqLogin): Promise<ReturnReponse<IResLogin>> {
    const url = "auth/login"; //params : page, filter
    return axiosClient.post(url, data);
  },

  getUser(): Promise<ReturnReponse<USER_MODEL>> {
    const url = "auth/get-auth"; //params : page, filter
    return axiosClient.get(url);
  },
};

export default authApi;
