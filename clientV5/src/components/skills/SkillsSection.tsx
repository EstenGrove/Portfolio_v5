import React from "react";
import styles from "../../css/skills/SkillsSection.module.scss";
import Title from "../shared/Title";
import {
	TSkillsConfig,
	SKILLS as skillsConfig,
} from "../../configs/skillsConfig";
import SkillsPrimary from "./SkillsPrimary";
import SkillsController from "./SkillsController";
// skills config

type Props = {};

const SkillsSection = ({}: Props) => {
	const { primary, experience } = skillsConfig as TSkillsConfig;
	return (
		<section className={styles.SkillsSection}>
			<Title title="skills" />
			<SkillsPrimary skillsList={primary} />
			{/* <SkillsController/> */}
			{/*  */}
			{/*  */}
			{/*  */}
		</section>
	);
};

export default SkillsSection;

SkillsSection.defaultProps = {};

SkillsSection.propTypes = {};
