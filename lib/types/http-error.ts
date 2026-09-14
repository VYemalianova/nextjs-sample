export class HttpError extends Error {
  public readonly statusCode: number;
  public readonly errors: string | string[];

  constructor(statusCode: number, errors: string | string[]) {
    super();

    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.errors = errors;
  }
}
