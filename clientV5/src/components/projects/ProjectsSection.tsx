import React from "react";
import styles from "../../css/projects/ProjectsSection.module.scss";
import Title from "../shared/Title";

type Props = {};

const ProjectsSection = ({}: Props) => {
	return (
		<section className={styles.ProjectsSection}>
			<Title title="projects" />
			{/*  */}
			{/*  */}
		</section>
	);
};

export default ProjectsSection;

ProjectsSection.defaultProps = {};

ProjectsSection.propTypes = {};
