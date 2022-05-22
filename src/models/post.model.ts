import { StringSchema } from "yup";
import { ENUM_POST_STATUS } from "../constant/base.constant";

export interface DETAIL_POST {
  _id: string;
  title: string;
  content: string;
  nameOfPoster: string;
  image: Array<any>;
  typePost: string;
  on: {
    _id: string;
    typePost: string;
    address: {
      detail: string;
      village: string;
      district: string;
      province: string;
      _id: string;
    };
    brand: string;
    color: string;
    microprocessor: string;
    ram: string;
    hardDrive: string;
    typeHardrive: string;
    graphicsCard: string;
    statusLaptop: string;
    guarantee: string;
    price: number;
  };
  onModel: string;
  status: ENUM_POST_STATUS;
  ratings: number;
  idUserPost: string;
  userInteractive: Array<any>;
  totalLike: number;
  comments: Array<any>;
  isAdvertised: Boolean;
  priceAdvert: number;
  totalPrice: number;
}
