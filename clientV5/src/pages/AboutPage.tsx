import React, { useEffect } from "react";
import styles from "../css/pages/AboutPage.module.scss";
import Title from "../components/shared/Title";
import TinyPixel from "../components/shared/TinyPixel";
import AboutPageSection from "../components/about/AboutPageSection";
import AboutSection from "../components/about/AboutSection";

type Props = {};

const AboutPage = () => {
	return (
		<div data-page="about" className={styles.AboutPage}>
			<Title title="about me" />
			{/* <AboutSection /> */}
			<AboutPageSection />
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
