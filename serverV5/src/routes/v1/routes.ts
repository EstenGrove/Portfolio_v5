import express from "express";
import { logPageVisit } from "../../controllers/analytics/analyticsController";
import { checkApiAuth } from "../../controllers/auth/authController";

const app = express();

// auth middleware (test route)
app.use("/CheckAuth", checkApiAuth);

// Analytics: Visit Counter
app.use("/TinyPixel", logPageVisit);

export default app;
