export * from "./authTypes";
export * from "./profileTypes";
export * from "./commonTypes";
export * from "./componentsTypes";

export interface ErrorResponse {
  data?: { message: string };
  error?: unknown;
}

export interface ErrorMessage {
  data: { message: string };
  status: number;
}
