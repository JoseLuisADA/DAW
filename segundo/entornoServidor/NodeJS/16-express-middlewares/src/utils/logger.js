import winston from 'winston';

// Define los colores para los niveles de log
winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'green',
});

// Crea la configuración del logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

export default logger;
