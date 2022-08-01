import { ArrayLogger } from "./ArrayLogger";

describe("Array logger", () => {
  describe("after creation", () => {
    it("should have no messages", () => {
      const logger = new ArrayLogger();
      expect(logger.debugMessages).toEqual([]);
      expect(logger.infoMessages).toEqual([]);
      expect(logger.warnMessages).toEqual([]);
      expect(logger.errorMessages).toEqual([]);
    });
  });

  it("should store its debug messages", () => {
    const logger = new ArrayLogger();
    logger.debug("Alpha");
    logger.debug("Beta");
    expect(logger.debugMessages).toEqual(["Alpha", "Beta"]);
  });

  it("should store its info messages", () => {
    const logger = new ArrayLogger();
    logger.info("Alpha");
    logger.info("Beta");
    expect(logger.infoMessages).toEqual(["Alpha", "Beta"]);
  });

  it("should store its warn messages", () => {
    const logger = new ArrayLogger();
    logger.warn("Alpha");
    logger.warn("Beta");
    expect(logger.warnMessages).toEqual(["Alpha", "Beta"]);
  });

  it("should store its error messages", () => {
    const logger = new ArrayLogger();
    logger.error("Alpha");
    logger.error("Beta");
    expect(logger.errorMessages).toEqual(["Alpha", "Beta"]);
  });
});
