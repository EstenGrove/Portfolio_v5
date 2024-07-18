import { useState } from "react";
import styles from "../css/pages/ProjectsPage.module.scss";
import Title from "../components/shared/Title";
import { getQueryParams } from "../hooks/useQueryParams";

type Props = {};

const ProjectsPage = ({}: Props) => {
	const selectedProjectID = getQueryParams("pid");

	return (
		<div className={styles.ProjectsPage}>
			<Title title="projects" />
			{/* LIST OF PROJECTS */}
			{/* SELECTED PROJECT FILLS THE SCREEN */}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default ProjectsPage;
