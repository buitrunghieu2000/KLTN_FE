import { State } from ".";
import { IReqBlockUser, IReqLogin } from "../../api/auth/auth.interface";
import authApi from "../../api/auth/authApi";
import { saveToLocalStorage } from "../../helper/base.helpers";
import { notifyError, notifySuccess } from "../../utils/notify";

type Actions = { setState: any; getState: () => State; dispatch: any };

export const loginAsync =
  (payload: IReqLogin) =>
  async ({ setState, getState }: Actions) => {
    const result = await authApi.login(payload);
    // console.log(result);
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
    // console.log("123", result);
    if (result.status === 200) {
      setState({ ...getState(), auth: result.data });
      return true;
    }
    return false;
  };
export const getAllUserAsync =
  ({ page, limit }: { page: number; limit: number }) =>
  async ({ setState, getState }: Actions) => {
    const result = await authApi.getAllUser(page, limit);
    if (result.status === 200) {
      setState({
        ...getState(),
        userList: result.data.users,
        totalUser: result.data.total,
      });
      return true;
    }
    return false;
  };

export const logoutAsync =
  () =>
  ({ setState, getState }: Actions) => {
    localStorage.removeItem("token");
    setState({ ...getState(), isLoggedIn: false });
  };

export const lockUser =
  (_id: string, payload: IReqBlockUser) =>
  async ({ setState, getState }: Actions) => {
    const result = await authApi.lockUser(payload);
    console.log("123", result.message);
    if (result.status === 200) {
      // copy list post ra
      const newList = [...getState().userList].filter(
        (item) => item._id !== _id
      );
      setState({ ...getState(), userList: newList });
      notifySuccess("Success");
      return;
    }
    notifyError("Error");
  };
