import ApiError from "./apiError.js"; 

const globalErrorHandler = (err, req, res, next) => {
  console.error('Unhandled Error:', err);

  let statusCode = 500;
  let message = 'Internal Server Error';
  let errors = [];

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
    errors = err.errors;
  } else if (err.name === 'ValidationError') {
    // Mongoose validation error
    statusCode = 400;
    message = 'Validation Error';
    errors = Object.values(err.errors).map(error => error.message);
  } else if (err.name === 'CastError') {
    // Mongoose casting error
    statusCode = 400;
    message = 'Invalid ID';
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export default globalErrorHandler;