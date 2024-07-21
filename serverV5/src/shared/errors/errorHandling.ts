// const logError = (req, res, next) => {}

// export type HTTPStatusCode = 200 | 304 | 404 | 400 | 500 | 502;

export enum HTTPStatusCode {
	// PRIMARY STATUS CODES
	OK = 200,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL_SERVER = 500,
	// REDIRECT/CACHING REQUESTS
	MOVED_PERMANENTLY = 301,
	MOVED_TEMPORARILY = 302,
	NOT_MODIFIED = 304,
	// BAD REQUESTS
	METHOD_NOT_ALLOWED = 405,
	REQUEST_TIMEOUT = 408,
	UNSUPPORTED_MEDIA_TYPE = 415,
	TOO_MANY_REQUESTS = 429,
	// SERVER ERRORS
	BAD_GATEWAY = 502,
	SERVICE_UNAVAILABLE = 503,
}

class BaseError extends Error {
	public readonly name: string;
	public readonly desc: string;
	public readonly httpCode: HTTPStatusCode;

	constructor(name: string, httpCode: HTTPStatusCode, desc: string) {
		super(desc);
		// forward the prototype
		Object.setPrototypeOf(this, new.target.prototype);

		this.name = name;
		this.desc = desc;
		this.httpCode = httpCode;

		// forward/maintain stack trace
		Error.captureStackTrace(this);
	}
}

class ClientError extends BaseError {
	constructor(name: string, desc?: string) {
		super(name, HTTPStatusCode.BAD_REQUEST, desc as string);
	}
}

export { BaseError };
