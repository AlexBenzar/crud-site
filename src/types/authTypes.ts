export interface AuthType {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegistrationType extends AuthType {
  username: string;
  role: string;
  picture: File | null | string;
}

export interface User extends RegistrationType {
  __v: number;
  _id: string;
}

export interface UserResponse {
  token: null | string;
  role: null | string;
}
