import React, { useEffect } from "react";
import styles from "../css/pages/AboutPage.module.scss";
import Title from "../components/shared/Title";
import { logVisit } from "../utils/utils_analytics";
import { analytics, currentEnv } from "../utils/utils_env";
import TinyPixel from "../components/shared/TinyPixel";

type Props = {};

const IS_ENABLED = import.meta.env.VITE_ENABLE_TINYPIXEL ?? false;

const AboutPage = () => {
	return (
		<div className={styles.AboutPage}>
			<Title title="about me" />
			{/*  */}
			{/*  */}
			{/*  */}
			{/*  */}
			<TinyPixel pageRoute="/about" />
		</div>
	);
};

export default AboutPage;

AboutPage.defaultProps = {};

AboutPage.propTypes = {};
