export interface User {
  __v: number;
  _id: string;
  boards: any[];
  email: string;
  fullName: string;
  membership: any[];
  token: string;
}

export interface UserSchema {
  _inited: boolean;

  userData?: User;
}
