import { Logger } from "./Logger";

export class CompositeLogger implements Logger {
  constructor(private readonly loggers: Logger[]) {}

  debug(message: string): void {
    for (const logger of this.loggers) {
      logger.debug(message);
    }
  }

  info(message: string): void {
    for (const logger of this.loggers) {
      logger.info(message);
    }
  }

  warn(message: string): void {
    for (const logger of this.loggers) {
      logger.warn(message);
    }
  }

  error(message: string): void {
    for (const logger of this.loggers) {
      logger.error(message);
    }
  }
}
