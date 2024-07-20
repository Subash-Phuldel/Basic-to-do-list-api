class AppError extends error {
  constructor(message, statusCode) {
    super(message);
    this.stautsCode = statusCode;
    this.status = `statusCode`.startsWith("4") ? "fail" : "error";

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
