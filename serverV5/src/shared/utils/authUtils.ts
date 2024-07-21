import { API_DETAILS as apiAuth } from "./envUtils";

export interface TAuthHeaders {
	buffer: string;
	username: string;
	password: string;
}

/**
 * Parses the authorization headers & extracts the username, password both as strings & as the original, readable buffer
 * @param authHeaders {String} - The 'Basic xxxxxxxxx:xxxxxxxx' authorization headers string
 * @returns {TAuthHeaders} - Returns TAuthHeaders: an object w/: 'buffer', 'username' and 'password' for the API
 */
const processAuthHeaders = (authHeaders: string): TAuthHeaders => {
	const headerStr = authHeaders?.split(/\s+/).pop();
	const buffer = Buffer?.from(headerStr as string, "base64").toString();
	const username = buffer?.split(":")?.[0];
	const password = buffer?.split(":")?.[1];

	return {
		buffer,
		username,
		password,
	};
};

/**
 * Checks authorization headers & compares against the target API credentials.
 * @param authHeaders {String} - The 'Basic xxxxxxxxx:xxxxxxxx' authorization headers string
 * @returns {Boolean} - Returns boolean
 */
const validateAuthHeaders = (authHeaders: string): boolean => {
	if (!authHeaders || authHeaders?.length <= 0) return false;
	// check username, password
	const { username, password } = processAuthHeaders(authHeaders);

	const isValid = username === apiAuth.user && password === apiAuth.password;

	return isValid;
};

export { processAuthHeaders, validateAuthHeaders };
