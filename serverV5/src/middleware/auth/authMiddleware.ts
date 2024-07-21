import { NextFunction, Request, Response } from "express";
import { validateAuthHeaders } from "../../shared/utils/authUtils";

/**
 * TAuthHeaders:
 * - The auth headers are a base64 encoded string for Basic Authorization
 * - Ex. 'Basic XXXXXXXXXXXX'
 */
export type TAuthHeaders = string | undefined;

const apiLogin = (req: Request, res: Response, next: NextFunction) => {
	const authHeaders: TAuthHeaders =
		req.headers.authorization ?? req.get("Authorization");
	const route = req.url;
	// WE DON'T WANNA RUN THE API AUTH FOR THE '/TinyPixel' ROUTE
	if (route.includes("/TinyPixel")) return next();
	const isValidAuth: boolean = validateAuthHeaders(authHeaders as string);

	if (!isValidAuth) {
		return res.status(401).json({ Status: "FAILED", Message: "Un-authorized" });
	} else {
		return next();
	}
};

export { apiLogin };
