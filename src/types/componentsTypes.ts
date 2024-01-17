/* eslint-disable @typescript-eslint/no-explicit-any */
import { SerializedError } from "@reduxjs/toolkit/react";
import { User } from "./authTypes";
import { ErrorMessage } from ".";

export interface UserFormType {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DeleteFormType extends UserFormType {
  id: string;
  deleteDataFunction: any;
  error: ErrorMessage | SerializedError;
  nav?: string;
}

export interface ProfileFormType extends UserFormType {
  data?: User;
  id?: string;
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
}
