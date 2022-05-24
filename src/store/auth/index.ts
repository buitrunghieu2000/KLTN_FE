import { createHook, createStore } from "react-sweet-state";
import { ADMIN_MODEL, USER_MODEL } from "../../models/user.model";
import {
  getUserAsync,
  loginAsync,
  logoutAsync,
  getAllUserAsync,
} from "./auth.action";
import { selector } from "./auth.selector";

export type State = {
  isLoggedIn: boolean;
  auth: USER_MODEL | undefined;
  userList: Array<ADMIN_MODEL>;
  totalUser: number;
};

const initialState: State = {
  isLoggedIn: false,
  auth: undefined,
  totalUser: 0,
  userList: [],
};

const actions = { loginAsync, getUserAsync, logoutAsync, getAllUserAsync };

const Store = createStore({
  initialState,
  actions,
});

const useAuth = createHook(Store, { selector: selector });

export default useAuth;
