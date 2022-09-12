import { Logger } from "./Logger";
import { LogLevel } from "./LogLevel";

export class FilterLogger implements Logger {
  private level: LogLevel = LogLevel.Info;

  constructor(private readonly target: Logger) {}

  getLevel(): LogLevel {
    return this.level;
  }

  setLevel(level: LogLevel): this {
    this.level = level;
    return this;
  }

  debug(message: string): void {
    if (this.level == LogLevel.Debug) {
      this.target.debug(message);
    }
  }

  info(message: string): void {
    if (this.level <= LogLevel.Info) {
      this.target.info(message);
    }
  }

  warn(message: string): void {
    if (this.level <= LogLevel.Warn) {
      this.target.warn(message);
    }
  }

  error(message: string): void {
    this.target.error(message);
  }
}
