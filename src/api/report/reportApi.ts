import axiosClient from "../axiosClient";
import { ReturnListReponse } from "../response.interface";
import { IReqReport } from "./reportReq.interface";
import { IResReport } from "./reportRes.interface";

const reportApi = {
  getReportById(params: IReqReport): Promise<ReturnListReponse<IResReport>> {
    const url = `report/get-report`; //params : page, filter
    return axiosClient.get(url, { params });
  },
};

export default reportApi;
