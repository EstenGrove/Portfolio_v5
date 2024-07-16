import React, { useRef } from "react";
import styles from "../../css/projects/ProjectsList.module.scss";
import { useIntersectionObserverShared } from "../../hooks/useIntersectionObserverShared";
import ProjectsItem from "./ProjectsItem";

type Props = {};

const list = [1, 2, 3, 4, 5];

const ProjectsList = ({}: Props) => {
	const listRef = useRef<HTMLUListElement>(null);
	const sharedObserver = useIntersectionObserverShared(listRef, {
		onIntersect: (entry) => {
			// do stuff
		},
		onExit: (entry) => {
			// do more stuff
		},
	});
	const projects = list;
	console.log("list", list);
	return (
		<div className={styles.ProjectsList}>
			<ul className={styles.ProjectsList_listContainer}>
				{projects &&
					projects.map((project, idx) => (
						<ProjectsItem key={idx} project={project} />
					))}
				{/*  */}
				{/*  */}
				{/*  */}
			</ul>
		</div>
	);
};

export default ProjectsList;
