import { ADMIN_MODEL, USER_MODEL } from "../../models/user.model";

export interface IResLogin {
  accessToken: string;
  role: string;
}

export interface IResUserList {
  total: number;
  users: Array<ADMIN_MODEL>;
}
