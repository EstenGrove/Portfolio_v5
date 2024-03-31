import React from "react";
import styles from "../../css/skills/SkillIcon.module.scss";
import sprite from "../../assets/icons/brands.svg";
import Highlighter from "../shared/Highlighter";

type Props = {
	icon: string;
	label: string;
	highlight?: string | undefined;
};

const icons = {
	colored: {
		angular: "angular",
		apache: "apache",
		apple: "apple",
		atlassian: "atlassian",
		atom: "atom",
		aws: "amazonaws",
		azure: "azuredevops",
		azure2: "microsoftazure",
		babel: "babel",
		bootstrap: "bootstrap",
		brave: "brave",
		circleCI: "circleci",
		cisco: "cisco",
		cloudflare: "cloudflare",
		codepen: "codepen",
		codesandbox: "codesandbox",
		confluence: "confluence",
		csharp: "csharp",
		css: "csswizardry",
		css3: "css31",
		cpanel: "cpanel",
		d3: "d3",
		digitalocean: "digitalocean",
		expo: "expo",
		gatsby: "gatsby",
		git: "git1",
		github: "github2",
		gitlab: "gitlab1",
		graphql: "graphql",
		gulp: "gulp",
		html: "html51",
		intellij: "intellijidea",
		ionic: "ionic",
		ios: "ios",
		javascript: "javascript",
		js: "javascript",
		jira: "jira",
		jquery: "jquery",
		json: "json",
		markdown: "markdown",
		letsencrypt: "letsencrypt",
		mySQL: "mysql",
		node: "node-dot-js",
		next: "next-dot-js",
		nuxt: "nuxt-dot-js",
		nginx: "nginx",
		npm: "npm",
		php: "php",
		postman: "postman",
		powershell: "powershell",
		prettier: "prettier",
		python: "python",
		postgres: "postgresql",
		react: "react",
		reactrouter: "reactrouter",
		redux: "redux",
		sass: "sass",
		sql: "sql",
		sentry: "sentry",
		svelte: "svelte",
		tailwind: "tailwindcss",
		twilio: "twilio",
		typescript: "typescript",
		vercel: "zeit",
		vscode: "visualstudiocode",
		vs: "visualstudio",
		v8: "v8",
		vue: "vue-dot-js",
		webpack: "webpack",
		windows: "windows1",
		wordpress: "wordpress1",
		zeit: "zeit",
		yarn: "yarn",
	},
	flat: {
		bash: "terminal1",
		css: "css32",
		git: "git2",
		html: "html-five",
		html2: "html-five2",
		npm: "npm1",
		windows: "windows8",
		android: "android1",
	},
};

const SkillIcon = ({ icon, label, highlight }: Props) => {
	return (
		<div className={styles.SkillIcon}>
			<svg className={styles.SkillIcon_icon}>
				<use xlinkHref={`${sprite}#icon-${icon}`}></use>
			</svg>
			<div className={styles.SkillIcon_label}>
				<Highlighter text={label} highlight={highlight} />
			</div>
		</div>
	);
};

export default SkillIcon;

SkillIcon.defaultProps = {};

SkillIcon.propTypes = {};
