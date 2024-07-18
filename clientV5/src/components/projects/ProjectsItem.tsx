import React from "react";
import styles from "../../css/projects/ProjectsItem.module.scss";
import sprite from "../../assets/icons/brands.svg";
import Picture from "../shared/Picture";
import GoToLink from "../shared/GoToLink";
import GoToProject from "./GoToProject";
import { Project } from "../../features/projects/types";

type Props = {
	project: Project;
};

type IconLinkProps = {
	link: string;
};

const IconLink = ({ link }: IconLinkProps) => {
	return (
		<a href={link} className={styles.IconLink}>
			<svg className={styles.IconLink_icon}>
				<use xlinkHref={`${sprite}#icon-github1`}></use>
			</svg>
		</a>
	);
};

const ProjectsItem = ({ project }: Props) => {
	return (
		<li className={styles.ProjectsItem}>
			<div className={styles.ProjectsItem_img}>
				<Picture
					width={350}
					height={350}
					alt={project?.alt ?? project?.desc}
					sourceList={project?.sourceList}
					fallbackSrc={project?.fallbackImgSrc}
				/>
			</div>
			<div className={styles.ProjectsItem_info}>
				<h6 className={styles.ProjectsItem_info_title}>
					{/* {project?.title} */}
					Pulley
				</h6>
				<p className={styles.ProjectsItem_info_desc}>
					{/* {project?.desc} */}
					Custom CLI utility for syncing multiple local Git repositories at
					once. NodeJS script using Chalk, Inquirer that runs asynchronously.
				</p>

				<div className={styles.ProjectsItem_info_links}>
					<IconLink link={project?.links?.github ?? ""} />
					<GoToProject to={`/projects?pid=${project?.id ?? 0}`}>
						View {project?.title ?? "Project"}
					</GoToProject>
				</div>
			</div>
			{/*  */}
			{/*  */}
			{/*  */}
			{/*  */}
		</li>
	);
};

export default ProjectsItem;
