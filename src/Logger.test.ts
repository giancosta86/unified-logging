import pino from "pino";
import bunyan from "bunyan";
import winston from "winston";
import { Logger } from "./Logger";

function testLogger(logger: Logger) {
  logger.debug("Test debug");
  logger.info("Test info");
  logger.warn("Test warn");
  logger.error("Test error");
}

describe("The unified interface", () => {
  it("should be compatible with the console object", () => {
    testLogger(console);
  });

  it("should be compatible with Pino", () => {
    const pinoLogger = pino();
    testLogger(pinoLogger);
  });

  it("should be compatible with Winston", () => {
    const winstonLogger = winston.createLogger({
      transports: [new winston.transports.Console()]
    });
    testLogger(winstonLogger);
  });

  it("should be compatible with Bunyan", () => {
    const bunyanLogger = bunyan.createLogger({ name: "BunyanTest" });
    testLogger(bunyanLogger);
  });
});
