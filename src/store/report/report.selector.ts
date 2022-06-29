import { State } from ".";

export const selector = (state: State) => {
  return {
    reportList: state.reportList,
    totalReport: state.totalReport,
  };
};
