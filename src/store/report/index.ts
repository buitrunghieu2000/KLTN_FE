import { createHook, createStore } from "react-sweet-state";
import { IResReport } from "../../api/report/reportRes.interface";
import { getReportByIdAsync } from "./report.action";
import { selector } from "./report.selector";

export type State = {
  reportList: Array<IResReport>;
  totalReport: number;
};

const initialState: State = {
  reportList: [],
  totalReport: 0,
};

const actions = {
  getReportByIdAsync,
};

const Store = createStore({
  initialState,
  actions,
});

const useReport = createHook(Store, { selector: selector });

export default useReport;
