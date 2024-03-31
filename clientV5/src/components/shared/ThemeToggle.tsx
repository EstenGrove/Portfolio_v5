import React, { useContext } from "react";
import styles from "../../css/shared/ThemeToggle.module.scss";
import sprite from "../../assets/icons/portfolio.svg";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {};

type TToggleProps = {
	// theme: "light" | "dark";
	// changeTheme: () => void;
};

// const ThemeToggle = ({ theme, changeTheme }: TToggleProps) => {
const ThemeToggle = () => {
	const { theme, changeTheme, toggleTheme } = useContext(ThemeContext);
	return (
		<div className={styles.ThemeToggle} onClick={toggleTheme}>
			<svg className={styles.ThemeToggle_icon}>
				<use
					xlinkHref={`${sprite}#icon-${
						theme === "dark" ? "wb_sunny" : "brightness_2"
					}`}
				></use>
			</svg>
		</div>
	);
};

export default ThemeToggle;

ThemeToggle.defaultProps = {};

ThemeToggle.propTypes = {};
