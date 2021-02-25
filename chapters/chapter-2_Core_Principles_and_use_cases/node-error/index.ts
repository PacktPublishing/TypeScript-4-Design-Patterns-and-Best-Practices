export class AppError extends Error {
  public readonly isOperational: boolean;

  constructor(description: string, isOperational: boolean) {
    super(description);
    this.name = this.constructor.name;
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}

function isAppError(error: Error | AppError): error is AppError {
  return (error as AppError).isOperational !== undefined;
}

class ErrorManagementService {
  public handleError(err: Error): void {
    console.log("Handling error:", err.message);
  }

  public isTrusted(error: Error) {
    if (isAppError(error)) {
      return error.isOperational;
    }
    return false;
  }
}

const errorManagementService = new ErrorManagementService();

process.on("uncaughtException", (error: Error) => {
  errorManagementService.handleError(error);
  if (!errorManagementService.isTrusted(error)) {
    console.log("Exiting because of error");
    process.exit(1);
  }
});

throw new AppError("Invalid use case", true); // Untrusted - Exit
// throw new Error("Invalid use case"); // Untrusted - Exit
// throw new AppError("Invalid use case", true); // Trusted - continue
