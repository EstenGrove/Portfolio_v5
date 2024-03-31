const API_AUTH = {
	development: {
		base: "FROM ENV FILE (.env.dev)",
		user: "FROM ENV FILE (.env.dev)",
		password: "FROM ENV FILE (.env.dev)",
	},
	production: {
		base: "FROM ENV FILE (.env.prod)",
		user: "FROM ENV FILE (.env.prod)",
		password: "FROM ENV FILE (.env.prod)",
	},
	testing: {
		base: "FROM ENV FILE (.env.test)",
		user: "FROM ENV FILE (.env.test)",
		password: "FROM ENV FILE (.env.test)",
	},
	local: {
		base: import.meta.env.VITE_API_BASE,
		user: "FROM ENV FILE (.env.local)",
		password: "FROM ENV FILE (.env.local)",
	},
};

const CURRENT_ENV_NAME = "local";
const CURRENT_ENV_AUTH = API_AUTH[CURRENT_ENV_NAME];

const API_ENDPOINTS = {
	analytics: {
		logVisit: "/TinyPixel",
	},
};
const { analytics } = API_ENDPOINTS;

const enableTinyPixel = CURRENT_ENV_NAME !== "local";

export {
	API_AUTH,
	CURRENT_ENV_AUTH as currentEnv,
	CURRENT_ENV_NAME as currentEnvName,
};

export { API_ENDPOINTS, analytics };

export { enableTinyPixel };
