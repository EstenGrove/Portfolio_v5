import express from "express";
import { validateAuthHeaders } from "../../shared/utils/authUtils";

const app = express();

// checks that the Api user credentials are valid
// NOTE: these are NOT user-level credentials, this just allows access to continue the request (eg. access the api)
const checkApiAuth = (req, res, next) => {
	const authHeaders = req.headers.authorization;
	const isValidAuth = validateAuthHeaders(authHeaders);

	console.log("isValidAuth", isValidAuth);
};

const authMiddleware = (req, res, next) => {
	const authHeaders = req.headers.authorization;
	const token = authHeaders.split(/\s+/).pop();

	console.group("Auth");
	console.log("authHeaders", authHeaders);
	console.log("token", token);
	console.groupEnd();
	// res.status(200).json({ status: "success" });
	next();
};

app.get("/", checkApiAuth);

export { authMiddleware, checkApiAuth };
