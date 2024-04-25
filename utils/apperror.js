class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
  
      this.statusCode = statusCode; // Corrected 'statuscode' to 'statusCode'
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; // Corrected 'startWith' to 'startsWith'
      this.isOperational = true; // Removed the incorrect line that tried to set 'isOperational' based on an undefined property
                                 // and directly set 'isOperational' to 'true' here
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = AppError; // Corrected the export statement
  