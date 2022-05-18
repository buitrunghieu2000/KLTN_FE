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
