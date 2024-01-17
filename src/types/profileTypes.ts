export interface ProfileType {
  _id: string;
  photo: string | File | null;
  full_name: string;
  gender: string;
  birthdate: string;
  city: string;
  user: string;
  __v: number;
}
