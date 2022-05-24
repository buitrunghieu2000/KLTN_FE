import { State } from ".";

export const selector = (state: State) => {
  return {
    isLoggedIn: state.isLoggedIn,
    auth: state.auth,
    userList: state.userList,
    totalUser: state.totalUser,
  };
};
