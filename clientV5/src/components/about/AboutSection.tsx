import React, { useMemo, useRef } from "react";
import styles from "../../css/about/AboutSection.module.scss";
import { aboutText } from "../../configs/aboutMeConfig";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { renderTextWithHighlights } from "../../utils/utils_text";
import Title from "../shared/Title";
import GoToLink from "../shared/GoToLink";

type TPara = {
	text: string;
	highlights: string[];
};
// To support multiple keywords/highlights
// Accepts list of words & generates a regex for each of the keywords & generates the markup for the highlights using '<b data-text="keyword">keyword</b>
const ParaWithHighlight = ({ text, highlights }: TPara) => {
	return (
		<span
			className={styles.ParaWithHighlight}
			dangerouslySetInnerHTML={{
				__html: renderTextWithHighlights(text, highlights),
			}}
		></span>
	);
};

const AboutSection = () => {
	const titleRef = useRef<HTMLDivElement>(null);
	const result = useIntersectionObserver(titleRef);
	const isActive = useMemo(() => {
		return result?.isIntersecting ?? false;
	}, [result?.isIntersecting]);

	return (
		<section className={styles.AboutSection} ref={titleRef}>
			<Title title="about me" />
			<div className={styles.AboutSection_content}>
				{Object.keys(aboutText).map((key, idx) => (
					<p key={`${key}-${idx}`} className={styles.AboutSection_content_para}>
						<ParaWithHighlight
							key={`PARA-${idx + 1}`}
							text={aboutText[key].text}
							highlights={aboutText[key].keywords}
						/>
					</p>
				))}
				<GoToLink to="/about">Read more about me</GoToLink>
			</div>
		</section>
	);
};

export default AboutSection;

AboutSection.defaultProps = {};

AboutSection.propTypes = {};
