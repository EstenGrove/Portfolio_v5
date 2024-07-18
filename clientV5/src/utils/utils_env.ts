/**
 * NOTE: each environment's variables will be defined from it's corresponding .env.* file
 * - 'development': .env.development
 * - 'production': .env.production
 * - 'local': .env.local
 * - 'testing': .env.testing (not really used nor needed.)
 */
const API_AUTH = {
	development: {
		base: import.meta.env.VITE_API_BASE,
		user: import.meta.env.VITE_API_USER,
		password: import.meta.env.VITE_API_PASSWORD,
	},
	production: {
		base: import.meta.env.VITE_API_BASE,
		user: import.meta.env.VITE_API_USER,
		password: import.meta.env.VITE_API_PASSWORD,
	},
	testing: {
		base: import.meta.env.VITE_API_BASE,
		user: import.meta.env.VITE_API_USER,
		password: import.meta.env.VITE_API_PASSWORD,
	},
	local: {
		base: import.meta.env.VITE_API_BASE,
		user: import.meta.env.VITE_API_USER,
		password: import.meta.env.VITE_API_PASSWORD,
	},
};

const CURRENT_ENV_NAME = "local";
const CURRENT_ENV_AUTH = API_AUTH[CURRENT_ENV_NAME];

const API_ENDPOINTS = {
	analytics: {
		logVisit: "/TinyPixel",
	},
	projects: {
		getAllProjects: "/GetProjects",
	},
	snippets: {
		getAllSnippets: "/GetSnippets",
	},
};
const { analytics, projects, snippets } = API_ENDPOINTS;

const enableTinyPixel = CURRENT_ENV_NAME !== "local";

export {
	API_AUTH,
	CURRENT_ENV_AUTH as currentEnv,
	CURRENT_ENV_NAME as currentEnvName,
};

export {
	// feature flag
	enableTinyPixel,
	// endpoints
	API_ENDPOINTS,
	analytics,
	projects,
	snippets,
};
