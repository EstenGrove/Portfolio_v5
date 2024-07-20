import { useState } from "react";
import styles from "../css/pages/ProjectsPage.module.scss";
import Title from "../components/shared/Title";
import { useSelector } from "react-redux";
import { selectProjects } from "../features/projects/projectsSlice";
import { getQueryParams } from "../hooks/useQueryParams";

type Props = {};

const ProjectsPage = ({}: Props) => {
	const selectedProjectID = getQueryParams("pid");
	const projects = useSelector(selectProjects);
	console.log("projects", projects);

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
