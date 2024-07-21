import express from "express";
import { checkApiAuth } from "../../controllers/auth/authController";
import { getProjects } from "../../controllers/projects/projectsController";
import { apiLogin } from "../../middleware/auth/authMiddleware";

const app = express();

// auth middleware (test route)
app.use("/CheckAuth", apiLogin, checkApiAuth);
app.use("/GetProjects", apiLogin, getProjects);

export default app;
