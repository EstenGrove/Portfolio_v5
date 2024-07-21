import { IResponse } from "../features/types";
import { currentEnv } from "./utils_env";

// API UTILS

const TOKEN = "DUMMY-TOKEN";

const genericGet = async (token: string = TOKEN): Promise<unknown> => {
	const url = currentEnv.base + "/CheckAuth";
	try {
		const request = await fetch(url, {
			method: "GET",
			headers: {
				Authorization:
					"Basic " + btoa(currentEnv.user + ":" + currentEnv.password),
				SecurityToken: token,
				"Content-Type": "application/json",
			},
		});
		const response = await request.json();
		return response;
	} catch (error) {
		console.log("error", error);
		return error;
	}
};

const enforceStrLength = (str: string, maxLength: number): string => {
	if (str?.length <= maxLength) return str;
	const newStr = str.slice(0, maxLength);

	return newStr;
};

const addEllipsis = (str: string, maxLength: number = 30): string => {
	const sliced = enforceStrLength(str, maxLength);
	return `${sliced}...`;
};

// SORTING UTILS
// sorts number ascending order (1-10)
const sortNumAscByKey = (key: string, list: object[] = []): object[] => {
	if (!list || list?.length <= 0) return [];
	return [...list].sort((a, b) => {
		return a?.[key as keyof object] - b?.[key as keyof object];
	});
};
// sorts number descending order (10-1)
const sortNumDescByKey = (key: string, list: object[] = []): object[] => {
	if (!list || list?.length <= 0) return [];
	return [...list].sort((a, b) => {
		return b?.[key as keyof object] - a?.[key as keyof object];
	});
};

export {
	// http utils
	genericGet,
	// misc utils
	enforceStrLength,
	addEllipsis,
	// sorting utils
	sortNumAscByKey,
	sortNumDescByKey,
};
