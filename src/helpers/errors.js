const { StatusCodes } = require('http-status-codes');

const error = (code, message) => ({
  isError: true,
  code,
  message,
});

module.exports = {
  badRequest: (message) => error(StatusCodes.BAD_REQUEST, message),
};
