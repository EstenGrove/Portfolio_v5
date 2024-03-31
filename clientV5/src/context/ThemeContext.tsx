import { useState, createContext, ReactNode } from "react";

export type TTheme = "light" | "dark";

export type TThemeState = {
	theme: TTheme;
	changeTheme: (theme: TTheme) => void;
	toggleTheme: () => void;
};

type TProps = {
	children?: ReactNode;
};

const intitialState = "light";

const ThemeContext = createContext<TThemeState>(intitialState);

const ThemeProvider = ({ children }: TProps) => {
	const [currentTheme, setCurrentTheme] = useState<TTheme>(intitialState);

	const toggleTheme = () => {
		const next = currentTheme === "light" ? "dark" : "light";
		setCurrentTheme(next);
		console.log("wasClicked");
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
