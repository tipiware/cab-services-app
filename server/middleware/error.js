const winston = require('winston');
const { combine, timestamp } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(new Date()),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({
      filename: 'error.log',
      level: 'error',
      handleExceptions: true
    }),
    new winston.transports.Console({
      handleExceptions: true
    })
  ],
  exitOnError: false // node will continue running even after uncaughtException
});

module.exports = function (error, req, res, next) {
  logger.error(error.message, error);
  res.status(500).send('Something failed. Unknown error.');
}