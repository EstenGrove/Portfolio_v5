import express from "express";
import { checkApiAuth } from "../../controllers/auth/authController";
import { getProjects } from "../../controllers/projects/projectsController";

const app = express();

// auth middleware (test route)
app.use("/CheckAuth", checkApiAuth);
app.use("/GetProjects", getProjects);

export default app;
