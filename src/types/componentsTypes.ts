/* eslint-disable @typescript-eslint/no-explicit-any */
import { SerializedError } from "@reduxjs/toolkit/react";
import { User } from "./authTypes";
import { ErrorMessage, ProfileType } from ".";

export interface UserFormType {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProfileFormType extends UserFormType {
  id: string;
  data?: ProfileType;
  changeProfilesFunction: any;
  error: ErrorMessage | SerializedError | undefined;
  nav?: string;
}

export interface EditFormType extends UserFormType {
  data: User;
}

export interface PaginationType extends React.HTMLAttributes<HTMLDivElement> {
  total: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface ModifyCardType {
  isHover: boolean;
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SortType {
  setOrder: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
