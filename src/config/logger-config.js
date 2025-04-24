const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const winston = require('winston');


const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

const errorLogger = createLogger({
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console(),
        new winston.transports.File({ filename: 'error.log' })
    ]
});


module.exports = {
    logger,
    errorLogger
}