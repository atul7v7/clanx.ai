"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWinstonLoggerService = void 0;
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const createWinstonLoggerService = () => {
    const logsLocation = process.env.LOGS_PATH || "./logs";
    const currentDate = new Date().toISOString().split("T")[0];
    return nest_winston_1.WinstonModule.createLogger({
        transports: [
            new winston_1.transports.File({
                dirname: logsLocation,
                filename: `${currentDate}-error.log`,
                rotationFormat: () => "30d",
                zippedArchive: false,
                level: "error",
                format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
            }),
            new winston_1.transports.File({
                dirname: logsLocation,
                rotationFormat: () => "30d",
                filename: `${currentDate}-combined.log`,
                format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
                zippedArchive: false,
            }),
            new winston_1.transports.Console({
                format: winston_1.format.combine(winston_1.format.cli(), winston_1.format.splat(), winston_1.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.format.printf((info) => {
                    return `${info.timestamp} ${info.level}: ${info.message}`;
                })),
            }),
        ],
    });
};
exports.createWinstonLoggerService = createWinstonLoggerService;
//# sourceMappingURL=winston-logger.js.map