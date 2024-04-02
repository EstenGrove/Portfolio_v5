import express, { NextFunction, Response, Request } from "express";
import { validateAuthHeaders } from "../../shared/utils/authUtils";

const app = express();

// checks that the Api user credentials are valid
// NOTE: these are NOT user-level credentials, this just allows access to continue the request (eg. access the api)
const checkApiAuth = (req: Request, res: Response, next: NextFunction) => {
	const authHeaders = req.headers.authorization;
	const isValidAuth = validateAuthHeaders(authHeaders);

	console.log("isValidAuth", isValidAuth);
};

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const authHeaders = req.headers.authorization;
	const token = authHeaders.split(/\s+/).pop();

	res.status(200).json({ status: "success" });
	// next();
};

app.get("/", checkApiAuth);

export { authMiddleware, checkApiAuth };
