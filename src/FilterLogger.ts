import { Logger } from "./Logger";
import { LogLevel } from "./LogLevel";

export class FilterLogger implements Logger {
  logLevel: LogLevel = LogLevel.Info;

  constructor(private readonly target: Logger) {}

  debug(message: string): void {
    if (this.logLevel == LogLevel.Debug) {
      this.target.debug(message);
    }
  }

  info(message: string): void {
    if (this.logLevel <= LogLevel.Info) {
      this.target.info(message);
    }
  }

  warn(message: string): void {
    if (this.logLevel <= LogLevel.Warn) {
      this.target.warn(message);
    }
  }

  error(message: string): void {
    this.target.error(message);
  }
}
