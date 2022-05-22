import { createHook, createStore } from "react-sweet-state";
import { selector } from "./auth.selector";
import { loginAsync, getUserAsync, logoutAsync } from "./auth.action";
import { USER_MODEL } from "../../models/user.model";

export type State = {
  isLoggedIn: boolean;
  auth: USER_MODEL | undefined;
};

const initialState: State = {
  isLoggedIn: false,
  auth: undefined,
};

const actions = { loginAsync, getUserAsync, logoutAsync };

const Store = createStore({
  initialState,
  actions,
});

const useAuth = createHook(Store, { selector: selector });

export default useAuth;
