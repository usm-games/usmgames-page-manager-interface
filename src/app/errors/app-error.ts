export class AppError extends Error {
  constructor(message?: string, public error?: Error) {
    super(message ? message : error?.message);
  }
}
