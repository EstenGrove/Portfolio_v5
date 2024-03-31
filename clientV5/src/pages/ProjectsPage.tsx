import React from "react";
import styles from "../css/pages/ProjectsPage.module.scss";
import Title from "../components/shared/Title";

type Props = {};

const ProjectsPage = ({}: Props) => {
	return (
		<div className={styles.ProjectsPage}>
			<Title title="projects" />
			{/*  */}
			{/*  */}
		</div>
	);
};

export default ProjectsPage;

ProjectsPage.defaultProps = {};

ProjectsPage.propTypes = {};
