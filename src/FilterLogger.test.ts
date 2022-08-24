import { ArrayLogger } from "./ArrayLogger";
import { FilterLogger } from "./FilterLogger";
import { LogLevel } from "./LogLevel";

type ExpectedLoggerOutput = {
  debug: boolean;
  info: boolean;
  warn: boolean;
  error: boolean;
};

function expectLoggerOutput(
  setupFilterLogger: (filterLogger: FilterLogger) => void,
  expectedLoggerOutput: ExpectedLoggerOutput
): void {
  const arrayLogger = new ArrayLogger();
  const filterLogger = new FilterLogger(arrayLogger);

  setupFilterLogger(filterLogger);

  filterLogger.debug("Debug message");
  filterLogger.info("Info message");
  filterLogger.warn("Warning message");
  filterLogger.error("Error message");

  expect(arrayLogger.debugMessages.length > 0).toBe(expectedLoggerOutput.debug);

  expect(arrayLogger.infoMessages.length > 0).toBe(expectedLoggerOutput.info);

  expect(arrayLogger.warnMessages.length > 0).toBe(expectedLoggerOutput.warn);

  expect(arrayLogger.errorMessages.length > 0).toBe(expectedLoggerOutput.error);
}

describe("FilterLogger", () => {
  it("should start with Info log level", () => {
    expectLoggerOutput(
      () => {
        //Just do nothing
      },
      {
        debug: false,
        info: true,
        warn: true,
        error: true
      }
    );
  });

  describe("when setting the log level to Debug", () => {
    it("should log all messages", () => {
      expectLoggerOutput(
        filterLogger => (filterLogger.logLevel = LogLevel.Debug),
        {
          debug: true,
          info: true,
          warn: true,
          error: true
        }
      );
    });
  });

  describe("when setting the log level to Info", () => {
    it("should skip debug messages", () => {
      expectLoggerOutput(
        filterLogger => (filterLogger.logLevel = LogLevel.Info),
        {
          debug: false,
          info: true,
          warn: true,
          error: true
        }
      );
    });
  });

  describe("when setting the log level to Warn", () => {
    it("should skip debug and info messages", () => {
      expectLoggerOutput(
        filterLogger => (filterLogger.logLevel = LogLevel.Warn),
        {
          debug: false,
          info: false,
          warn: true,
          error: true
        }
      );
    });
  });

  describe("when setting the log level to Error", () => {
    it("should log just error messages", () => {
      expectLoggerOutput(
        filterLogger => (filterLogger.logLevel = LogLevel.Error),
        {
          debug: false,
          info: false,
          warn: false,
          error: true
        }
      );
    });
  });
});
