import React, { useRef } from "react";
import styles from "../../css/projects/ProjectsList.module.scss";
import { useIntersectionObserverShared } from "../../hooks/useIntersectionObserverShared";
import ProjectsItem from "./ProjectsItem";
import { Project } from "../../features/projects/types";
import { sortNumAscByKey } from "../../utils/utils_misc";

type Props = {
	projects: Project[];
};

const ProjectsList = ({ projects }: Props) => {
	const listRef = useRef<HTMLUListElement>(null);
	const sortedProjects = sortNumAscByKey("id", projects) as Project[];
	const sharedObserver = useIntersectionObserverShared(listRef, {
		onIntersect: (entry) => {
			// do stuff
		},
		onExit: (entry) => {
			// do more stuff
		},
	});
	return (
		<div className={styles.ProjectsList}>
			<ul className={styles.ProjectsList_listContainer}>
				{sortedProjects &&
					sortedProjects.map((project, idx) => (
						<ProjectsItem key={idx} project={project} />
					))}
			</ul>
		</div>
	);
};

export default ProjectsList;
