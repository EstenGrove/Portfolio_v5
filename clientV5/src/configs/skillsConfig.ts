export type TSkillFilterType =
	| "language"
	| "library"
	| "framework"
	| "platform"
	| "tool";
export type TSkillFilterName =
	| "Languages"
	| "Libraries"
	| "Frameworks"
	| "Platforms"
	| "Tools";

export type TSkillFilter = {
	name: string;
	alt: string;
	value: string;
};

export type TSkillTypesMap = {
	language: TSkillFilter;
	library: TSkillFilter;
	framework: TSkillFilter;
	platform: TSkillFilter;
	tool: TSkillFilter;
};

export type TSkillFilters = TSkillFilter[];

export interface TSkill {
	name: string;
	icon: string;
}

// adds the 'type' field
export type TExperience = TSkill & {
	type?: string;
};

export interface TSkillsConfig {
	primary: TSkill[];
	experience: TExperience[];
}

const SKILL_TYPES: TSkillTypesMap = {
	language: {
		name: "Languages",
		alt: "Language",
		value: "language",
	},
	library: {
		name: "Libraries",
		alt: "Library",
		value: "library",
	},
	framework: {
		name: "Frameworks",
		alt: "Framework",
		value: "framework",
	},
	platform: {
		name: "Platforms",
		alt: "Servers",
		value: "platform",
	},
	tool: {
		name: "Tools",
		alt: "Tool",
		value: "tool",
	},
};

const SKILL_FILTERS: TSkillFilters = [
	{
		name: "Languages",
		alt: "Language",
		value: "language",
	},
	{
		name: "Libraries",
		alt: "Library",
		value: "library",
	},
	{
		name: "Frameworks",
		alt: "Framework",
		value: "framework",
	},
	{
		name: "Platforms",
		alt: "Platform",
		value: "platform",
	},
	{
		name: "Tools",
		alt: "Tool",
		value: "tool",
	},
];

const ALL_SKILL_FILTERS: TSkillFilterName[] = [
	"Languages",
	"Libraries",
	"Frameworks",
	"Platforms",
	"Tools",
];

const SKILLS: TSkillsConfig = {
	primary: [
		{ name: "HTML", icon: "html51" },
		{ name: "CSS", icon: "csswizardry" },
		{ name: "JavaScript", icon: "javascript" },
		{ name: "ReactJS", icon: "react" },
		{ name: "NodeJS", icon: "node-dot-js" },
		{ name: "Bash", icon: "terminal1" },
		{ name: "Git", icon: "git1" },
		{ name: "Typescript", icon: "typescript" },
		{ name: "Redux", icon: "redux" },
		{ name: "Webpack", icon: "webpack" },
		{ name: "NPM", icon: "npm" },
		{ name: "SQL Server", icon: "database" },
		{ name: "Jira", icon: "jira" },
	],
	experience: [
		{ name: "HTML", icon: "html51", type: "languages" },
		{ name: "CSS", icon: "csswizardry", type: "languages" },
		{ name: "JavaScript", icon: "javascript", type: "languages" },
		{ name: "ReactJS", icon: "react", type: "frameworks" },
		{ name: "NodeJS", icon: "node-dot-js", type: "frameworks" },
		{ name: "Apache", icon: "apache", type: "platforms" },
		{ name: "AWS", icon: "amazonaws", type: "platforms" },
		{ name: "Azure DevOps", icon: "azuredevops", type: "platforms" },
		{ name: "Azure Platform", icon: "microsoftazure", type: "platforms" },
		{ name: "Babel", icon: "babel", type: "tools" },
		{ name: "Bootstrap", icon: "bootstrap", type: "libraries" },
		{ name: "Bash", icon: "terminal1", type: "languages" },
		{ name: "AngularJS", icon: "angular", type: "frameworks" },
		{ name: "Circle CI", icon: "circleci", type: "platforms" },
		{ name: "Cloudflare", icon: "cloudflare", type: "platforms" },
		{ name: "cPanel", icon: "cpanel", type: "platforms" },
		{ name: "D3", icon: "d3-dot-js", type: "libraries" },
		{ name: "Digital Ocean", icon: "digitalocean", type: "platforms" },
		{ name: "Expo", icon: "expo", type: "frameworks" },
		{ name: "FileZilla", icon: "filezilla", type: "tools" },
		{ name: "Firebase", icon: "firebase", type: "platforms" },
		{ name: "Electron", icon: "electron", type: "frameworks" },
		{ name: "Gatsby", icon: "gatsby", type: "frameworks" },
		{ name: "Git", icon: "git1", type: "tools" },
		{ name: "Github", icon: "github2", type: "platforms" },
		{ name: "Gulp", icon: "gulp", type: "tools" },
		{ name: "GraphQL", icon: "graphql", type: "tools" },
		{ name: "Google Analytics", icon: "googleanalytics", type: "tools" },
		{ name: "Ionic", icon: "ionic", type: "libraries" },
		{ name: "iOS", icon: "ios", type: "platforms" },
		{ name: "Jest", icon: "jest", type: "libraries" },
		{ name: "Jira", icon: "jira", type: "tools" },
		{ name: "jQuery", icon: "jquery", type: "libraries" },
		{ name: "JSON", icon: "json", type: "languages" },
		{ name: "Markdown", icon: "markdown", type: "languages" },
		{ name: "Let's Encrypt", icon: "letsencrypt", type: "tools" },
		{ name: "Linux", icon: "linux1", type: "platforms" },
		{ name: "MySQL", icon: "mysql", type: "platforms" },
		{ name: "MongoDB", icon: "mongodb", type: "platforms" },
		{ name: "NextJS", icon: "next-dot-js", type: "frameworks" },
		{ name: "NuxtJS", icon: "nuxt-dot-js", type: "frameworks" },
		{ name: "NGINX", icon: "nginx", type: "platforms" },
		{ name: "npm", icon: "npm", type: "tools" },
		{ name: "Postman", icon: "postman", type: "tools" },
		{ name: "Photoshop (PS)", icon: "adobephotoshop", type: "tools" },
		{ name: "Powershell", icon: "powershell", type: "languages" },
		{ name: "Prettier", icon: "prettier", type: "tools" },
		{ name: "Python", icon: "python", type: "languages" },
		{ name: "PostgreSQL", icon: "postgresql", type: "platforms" },
		{ name: "React Router", icon: "reactrouter", type: "libraries" },
		{ name: "Redux", icon: "redux", type: "libraries" },
		{ name: "Redux Toolkit", icon: "redux", type: "libraries" },
		{ name: "SCSS/Sass", icon: "sass", type: "libraries" },
		{ name: "SQL", icon: "database", type: "platforms" },
		{ name: "SSMS", icon: "database", type: "platforms" },
		{ name: "Sentry", icon: "sentry", type: "tools" },
		{ name: "Socket.io", icon: "socket-dot-io", type: "libraries" },
		{ name: "Svelte", icon: "svelte", type: "frameworks" },
		{ name: "TailwindCSS", icon: "tailwindcss", type: "libraries" },
		{ name: "Twilio", icon: "twilio", type: "tools" },
		{ name: "Typescript", icon: "typescript", type: "languages" },
		{ name: "Visual Studio", icon: "visualstudio", type: "tools" },
		{ name: "VSCode", icon: "visualstudiocode", type: "tools" },
		{ name: "Vue", icon: "vue-dot-js", type: "frameworks" },
		{ name: "Webpack", icon: "webpack", type: "tools" },
		{ name: "Wordpress", icon: "wordpress1", type: "platforms" },
		{ name: "Vercel", icon: "zeit", type: "frameworks" },
	],
};

export { SKILLS, SKILL_TYPES, SKILL_FILTERS, ALL_SKILL_FILTERS };
