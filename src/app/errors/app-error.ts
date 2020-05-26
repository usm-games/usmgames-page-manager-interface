export class AppError extends Error {
  constructor(message?: string, public error?: any) {
    super(message ? message : error?.message);
  }
}
