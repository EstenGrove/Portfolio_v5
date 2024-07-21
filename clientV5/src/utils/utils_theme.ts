import { TTheme } from "../context/ThemeContext";

// execute media query & fire optional callback on match
const queryMedia = (queryStr: string) => {
	if (window.matchMedia) {
		// results of media query
		const matches = window.matchMedia(queryStr)?.matches;
		return matches;
	} else {
		// un-supported or otherwise unknown
		return false;
	}
};

const setThemeToBody = (theme: TTheme) => {
	document.documentElement.dataset.theme = theme;
};

const setPreferredTheme = () => {
	const preference = getPreferredTheme();
	setThemeToBody(preference);
};

const getPreferredTheme = (): TTheme => {
	const darkQuery = "(prefers-color-scheme: dark)";
	const prefersDark = queryMedia(darkQuery);

	if (prefersDark) {
		// setThemeToBody("dark");
		return "dark";
	} else {
		// setThemeToBody("light");
		return "light";
	}
};

export { queryMedia, getPreferredTheme, setPreferredTheme, setThemeToBody };
