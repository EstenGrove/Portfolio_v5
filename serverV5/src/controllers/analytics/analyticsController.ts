import express, { NextFunction, Request, Response } from "express";

const app = express();

const ENABLE_LOGGING = false;

// just logs the headers to the console
const debugLogger = (req: Request) => {
	const pageRoute = req.query.page ?? "Unknown";
	const locale = req.query.locale ?? "Not Recognized";
	const tzOffset = req.query.tzOffset ?? "Unknown";
	const timezone = req.query.tz ?? "Not sure";
	// From rest of the headers or elsewhere
	const referrer = req.headers.referer ?? req.get("referrer");
	const userAgent = req.headers.userAgent ?? req.get("User-Agent");
	const origin = req.headers.origin ?? req.get("origin");
	const userIP = req.socket.remoteAddress;
	const languages = req.headers["accept-language"];

	console.group("Log Visit");
	console.log("referrer", referrer);
	console.log("userAgent", userAgent);
	console.log("origin", origin);
	console.log("userIP", userIP);
	console.log("pageRoute", pageRoute);
	console.log("languages", languages);
	console.log("locale", locale);
	console.log("tzOffset", tzOffset);
	console.log("timezone", timezone);
	console.groupEnd();
};

/**
 * A static response containing:
 * - Base64-encoded transparent image in .gif format
 * - 200 status code
 * - Relevant headers
 * NOTE: this is just used for the 'TinyPixel' visit counter feature
 */
const response = {
	statusCode: 200,
	body: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
	headers: { "Content-Type": "image/gif" },
	isBase64Encoded: true,
};

const logPageVisit = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// - Page Route: (eg. '/home', '/about' etc)
	// - Referrer: (eg. https://somedomain.com/)
	// - User-Agent: browser, platform & device meta
	// - User's IP Address: IP address of request's origin
	// From query params:

	if (ENABLE_LOGGING) {
		debugLogger(req);
	}
	res.status(200).json(response);
};

app.get("/TinyPixel", logPageVisit);

export { logPageVisit };
