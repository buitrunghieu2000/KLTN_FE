import { State } from ".";
import { IReqLogin } from "../../api/auth/auth.interface";
import authApi from "../../api/auth/authApi";
import { saveToLocalStorage } from "../../helper/base.helpers";

type Actions = { setState: any; getState: () => State; dispatch: any };

export const loginAsync =
  (payload: IReqLogin) =>
  async ({ setState, getState }: Actions) => {
    const result = await authApi.login(payload);
    console.log(result);
    if (result.status === 200) {
      saveToLocalStorage("token", result.data.accessToken);
      setState({ ...getState(), isLoggedIn: true });
      return true;
    }
    return false;
  };

export const getUserAsync =
  () =>
  async ({ setState, getState }: Actions) => {
    const result = await authApi.getUser();
    console.log("123", result);
    if (result.status === 200) {
      setState({ ...getState(), auth: result.data });
      return true;
    }
    return false;
  };

export const Logout =
  () =>
  ({ setState, getState }: Actions) => {
    localStorage.removeItem("token");
    setState({ ...getState(), isLoggedIn: false });
  };
