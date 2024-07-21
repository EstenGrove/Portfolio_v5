import { NextFunction, Request, Response } from "express";
import { validateAuthHeaders } from "../../shared/utils/authUtils";
import { BaseError, HTTPStatusCode } from "../../shared/errors/errorHandling";
import { ResponseModel } from "../../models/shared/ResponseModel";

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
		const err = new BaseError(
			"Un-authorized",
			HTTPStatusCode.UNAUTHORIZED,
			"Invalid or missing API credentials. Please review the Authorization headers in your request handler."
		);
		const response = new ResponseModel({
			status: "FAILED",
			msg: err.message,
			errorMsg: err.desc,
			errorStack: err.stack,
		});
		res.status(err.httpCode).json(response);
	} else {
		next();
	}
};

export { apiLogin };
