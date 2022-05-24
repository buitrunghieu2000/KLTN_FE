import { StringSchema } from "yup";

export interface USER_MODEL {
  user: {
    _id: string;
    name: string;
    phone: number;
    address: {
      detail: string;
      village: string;
      district: string;
      province: string;
    };
    ratings: number;
    posts: number;
  };
  role: string;
}
export interface ADMIN_MODEL {
  // users: {
  _id: string;
  username: string;
  isVerified: boolean;
  otp: number;
  role: string;
  status: string;
  idUser: {
    _id: string;
    name: string;
    phone: number;
    address: {
      detail: string;
      village: string;
      district: string;
      province: string;
      _id: string;
    };
    ratings: number;
    posts: number;
  };
  // };
}
