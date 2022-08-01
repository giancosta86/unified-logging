import { Logger } from "./Logger";

export class ArrayLogger implements Logger {
  private readonly _debugMessages: string[] = [];
  private readonly _infoMessages: string[] = [];
  private readonly _warnMessages: string[] = [];
  private readonly _errorMessages: string[] = [];

  get debugMessages(): readonly string[] {
    return this._debugMessages;
  }

  get infoMessages(): readonly string[] {
    return this._infoMessages;
  }

  get warnMessages(): readonly string[] {
    return this._warnMessages;
  }

  get errorMessages(): readonly string[] {
    return this._errorMessages;
  }

  debug(message: string): void {
    this._debugMessages.push(message);
  }

  info(message: string): void {
    this._infoMessages.push(message);
  }

  warn(message: string): void {
    this._warnMessages.push(message);
  }

  error(message: string): void {
    this._errorMessages.push(message);
  }
}
