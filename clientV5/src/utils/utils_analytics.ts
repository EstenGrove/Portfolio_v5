import { analytics, currentEnv } from "./utils_env";

// DONT' USE THIS UNLESS ABSOLUTELY NEEDED!!!
// - INSTEAD USE THE <TinyPixel/> COMPONENT!!!!
const logVisit = async (pageRoute: string) => {
	let url = currentEnv.base + analytics.logVisit;
	url += "?page=" + pageRoute;

	try {
		const request = await fetch(url);
		const response = await request.json();
		return response;
	} catch (error) {
		console.log("Error: ", error);
		return error;
	}
};

export { logVisit };
