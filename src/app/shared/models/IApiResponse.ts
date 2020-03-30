export interface IApiResponse {
  data?: any;
  errors?: IApiError[];
}

export interface IApiError {
  errorCode: string;
  message: string;
}
