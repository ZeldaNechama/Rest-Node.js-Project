import * as log4js from "log4js";

log4js.configure({
  appenders: { log: { type: "file", filename: "log.log" } },
  categories: { default: { appenders: ["log"], level: "error" } },
});

const logger = log4js.getLogger();
logger.level = "debug";

export default logger;
