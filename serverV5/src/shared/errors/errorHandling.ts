// const logError = (req, res, next) => {}

// export type HTTPStatusCode = 200 | 304 | 404 | 400 | 500 | 502;

export enum HTTPStatusCode {
	OK = 200,
	BAD_REQUEST = 400,
	NOT_FOUND = 404,
	INTERNAL_SERVER = 500,
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

export { BaseError };
