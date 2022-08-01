import { CompositeLogger } from "./CompositeLogger";
import { ArrayLogger } from "./ArrayLogger";

describe("Composite logger", () => {
  describe("to all of its loggers", () => {
    let firstLogger: ArrayLogger;
    let secondLogger: ArrayLogger;
    let compositeLogger: CompositeLogger;

    beforeEach(() => {
      firstLogger = new ArrayLogger();
      secondLogger = new ArrayLogger();
      compositeLogger = new CompositeLogger([firstLogger, secondLogger]);
    });

    it("should log debug messages", () => {
      compositeLogger.debug("Sigma");
      expect(firstLogger.debugMessages).toEqual(["Sigma"]);
      expect(secondLogger.debugMessages).toEqual(["Sigma"]);
    });

    it("should log info messages", () => {
      compositeLogger.info("Sigma");
      expect(firstLogger.infoMessages).toEqual(["Sigma"]);
      expect(secondLogger.infoMessages).toEqual(["Sigma"]);
    });

    it("should log warn messages", () => {
      compositeLogger.warn("Sigma");
      expect(firstLogger.warnMessages).toEqual(["Sigma"]);
      expect(secondLogger.warnMessages).toEqual(["Sigma"]);
    });

    it("should log error messages", () => {
      compositeLogger.error("Sigma");
      expect(firstLogger.errorMessages).toEqual(["Sigma"]);
      expect(secondLogger.errorMessages).toEqual(["Sigma"]);
    });
  });
});
