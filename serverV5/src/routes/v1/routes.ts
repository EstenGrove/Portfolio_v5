import express, { Express } from "express";
import { logPageVisit } from "../../controllers/analytics/analyticsController";

const app = express();

// Analytics: Visit Counter
app.use("/TinyPixel", logPageVisit);

export default app;
