import React, { useEffect } from "react";
import styles from "../css/pages/ProjectPage.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import {
	selectCurrentProject,
	setCurrentProjectByID,
} from "../features/projects/projectsSlice";
import ProjectsPageHeader from "../components/projects/ProjectsPageHeader";
import { Project } from "../features/projects/types";
import ParaBlock from "../components/shared/ParaBlock";
import Title from "../components/shared/Title";

// REQUIREMENTS:
// - "about this project." section (eg a paragraph description)
// - "usecases.": the intention, idea or origin of the project's conception
// - "insights": various things learned while building it, possibly with code samples

const ProjectPage = () => {
	const params = useParams();
	const dispatch = useAppDispatch();
	const projectID: number = Number(params?.id) ?? -1;
	const selectedProject = useSelector(selectCurrentProject);

	// load project from url path: '/projects/:id'
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		if (projectID) {
			dispatch(setCurrentProjectByID({ projectID }));
		}

		return () => {
			isMounted = false;
		};
	}, [dispatch, projectID]);

	return (
		<div className={styles.ProjectPage}>
			<ProjectsPageHeader project={selectedProject as Project} />

			<div style={{ margin: "15rem 0" }}></div>
			<ParaBlock>
				<b>Pulley-CLI</b> is custom built command-line-interface designed to
				make managing, maintaining and synchronizing multiple Git repositories
				as easy and fast as possible. At a previous job I had to work with
				several separate repositories that all received updates, PRs etc on a
				regular basis and whose changes always needed to be in-sync with the
				other repositories. Keeping these projects in separate repos made the
				task of pulling latest not only a time-suck but it was very prone to
				errors and quite tedious having to manually switch to each directory,
				check the status of the working branch and pull latest.
			</ParaBlock>
			{/*  */}
			{/*  */}
		</div>
	);
};

export default ProjectPage;
