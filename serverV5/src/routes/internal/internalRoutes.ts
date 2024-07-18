import express from "express";
import { logPageVisit } from "../../controllers/analytics/analyticsController";
import { ErrorLogger, Logger } from "../../shared/logging/Logger";

const app = express();
// const logger = new Logger('./logs/errors/error.log')
const errorLogger = new ErrorLogger("./logs/errors/error.log");

// Analytics: Visit Counter
app.use("/TinyPixel", logPageVisit);

export default app;
