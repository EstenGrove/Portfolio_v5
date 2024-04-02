import React from "react";
import styles from "../../css/about/AboutPageSection.module.scss";
import { aboutText } from "../../configs/aboutMeConfig";
import { ParaWithHighlight } from "./AboutSection";

type Props = {};

const AboutPageSection = ({}: Props) => {
	return (
		<section className={styles.AboutPageSection}>
			<div className={styles.AboutPageSection_content}>
				{Object.keys(aboutText).map((key, idx) => (
					<p key={key} className={styles.AboutPageSection_content_para}>
						<ParaWithHighlight
							key={`${key}-${idx}`}
							text={aboutText[key].text}
							highlights={aboutText[key].keywords}
						/>
					</p>
				))}
			</div>
		</section>
	);
};

export default AboutPageSection;

AboutPageSection.defaultProps = {};

AboutPageSection.propTypes = {};
