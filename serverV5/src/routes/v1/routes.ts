import express from "express";
import { checkApiAuth } from "../../controllers/auth/authController";

const app = express();

// auth middleware (test route)
app.use("/CheckAuth", checkApiAuth);

export default app;
