import React, { ReactNode } from "react";
import styles from "../../css/layout/Header.module.scss";

type Props = {
	children?: ReactNode;
};

const Header = ({ children }: Props) => {
	return (
		<header className={styles.Header}>
			<h1 className={styles.Header_intro}>
				Hi<b>,</b>
			</h1>
			<h3 className={styles.Header_name}>
				I'm Steven G<b>.</b>
			</h3>
			<h2 className={styles.Header_title}>Software Developer</h2>
			{children}
		</header>
	);
};

export default Header;

Header.defaultProps = {};

Header.propTypes = {};
