import { useEffect } from "react";
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
import Subtitle from "../components/shared/Subtitle";

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
			<br />
			<Subtitle>
				about<b>.</b>
			</Subtitle>
			<ParaBlock>
				<b>Pulley-CLI</b> is a simple, but useful command-line-interface
				designed to make synchronizing multiple Git repositories as easy and
				fast as possible. Once installed you simply run the script's command via
				your terminal interface of choice by typing: <code>pulley</code>.
			</ParaBlock>
			<br />
			<ParaBlock>
				Pulley will recognize whether it's your first time running the app or
				not and ask you some basic questions about what you're trying to
				accomplish like where the repos directory(s) are located, if you want to
				apply alias to specific repos or commands. It will then give you a
				selectable UI to choose which repos to pull latest for whether that's
				all or select repos only. Or you can simply pass some CLI flags when
				calling the script to skip the Terminal interface entirely.
			</ParaBlock>

			<br />
			<br />
			<br />
			<br />

			<Subtitle>
				use-case<b>.</b>
			</Subtitle>
			<ParaBlock>
				At a previous job I had to work with several separate repositories that
				were all inter-dependent. They all needed to be in-sync in order for the
				software to even run on your local environment, which required
				constantly pulling latest for several repositories each day, or
				sometimes numerous times in a single day. It was a pretty big pain point
				for the team that I felt only slowed down development and made
				developers less likely to go the extra mile as it was just another
				tedious hurdle to jump before getting started.
			</ParaBlock>
			<br />
			<ParaBlock>
				As a result of this common and frequent issue I spent a few hours
				writing a NodeJS script that would allow the user to add/remove/update
				the directory(s) for multiple repos, and run a single command to pull
				latest for all of them. I also knew I wanted the ability to choose when
				to pull for which repos, as there are still isntances where you may have
				changes or something you don't want overwritten in one repo's branch. It
				was also important that it had a very user-friendly interface that would
				fair well across operating systems. That way any developer in our
				company could install the CLI and use it out of the box with minimal
				setup or dependencies.
			</ParaBlock>
		</div>
	);
};

export default ProjectPage;
