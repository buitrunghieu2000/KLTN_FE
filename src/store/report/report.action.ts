import { State } from ".";
import reportApi from "../../api/report/reportApi";
import { IReqReport } from "../../api/report/reportReq.interface";

type Actions = { setState: any; getState: () => State; dispatch: any };

export const getReportByIdAsync =
  (params: IReqReport) =>
  async ({ setState, getState }: Actions) => {
    const result = await reportApi.getReportById(params);
    console.log(result);
    if (result.status === 200) {
      setState({ ...getState(), reportList: result.data });
      return;
    }
  };
