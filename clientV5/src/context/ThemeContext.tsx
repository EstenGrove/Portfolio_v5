import { useState, createContext, ReactNode } from "react";
import { getPreferredTheme } from "../utils/utils_theme";

export type TTheme = "light" | "dark";

export type TThemeState = {
	theme: TTheme;
	changeTheme?: (theme: TTheme) => void;
	toggleTheme?: () => void;
};

type TProps = {
	children?: ReactNode;
};

const getInitialState = (): string => {
	const preference = getPreferredTheme();
	return preference as string;
};

const initialState = getInitialState() as TTheme;

/**
 * Uncomment below once 'accents' & other related items have been added
 */
// const initialState = {
// 	theme: "light",
// 	accents: {
// 		primary: null,
// 		secondary: null
// 	}
// };

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }: TProps) => {
	const [currentTheme, setCurrentTheme] = useState<TTheme>(initialState);

	const toggleTheme = () => {
		const next = currentTheme === "light" ? "dark" : "light";
		setCurrentTheme(next);
		document.documentElement.dataset.theme = next;
	};

	const changeTheme = (theme: TTheme) => {
		setCurrentTheme(theme);
	};

	return (
		<ThemeContext.Provider
			value={{ theme: currentTheme, changeTheme, toggleTheme }}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
