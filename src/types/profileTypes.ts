export interface ProfileType {
  _id: string;
  photo: string | File | null;
  full_name: string;
  gender: string;
  birthdate: string;
  city: string;
  country: string;
  user: string;
  __v: number;
}

export interface getProfileType {
  id: string;
  order: string;
  search: string;
}
