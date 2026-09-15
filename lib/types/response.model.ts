export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export class successResponse<T> implements IResponse<T> {
  success: boolean;
  message: string;
  data: T;

  constructor(success: boolean, message: string, data: T) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}

export interface IErrorResponse {
  success: boolean;
  errors?: string | string[];
}
