import React from "react";
import styles from "../../css/projects/ProjectsItem.module.scss";
import sprite from "../../assets/icons/brands.svg";
import Picture from "../shared/Picture";
import GoToProject from "./GoToProject";
import { Project } from "../../features/projects/types";
import { addEllipsis } from "../../utils/utils_misc";

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

type BadgeProps = {
	text: string;
};
const Badge = ({ text }: BadgeProps) => {
	return <li className={styles.Badge}>{text}</li>;
};
type BadgeListProps = {
	list: string[];
};
const BadgesList = ({ list }: BadgeListProps) => {
	return (
		<div className={styles.BadgesList}>
			<ul className={styles.BadgesList_list}>
				{list && list.map((badge) => <Badge key={badge} text={badge} />)}
			</ul>
		</div>
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
				<h6 className={styles.ProjectsItem_info_title}>{project?.title}</h6>
				<p className={styles.ProjectsItem_info_desc}>{project?.desc}</p>
				<BadgesList list={project?.listOfTech} />

				<div className={styles.ProjectsItem_info_links}>
					<IconLink link={project?.links?.github ?? ""} />
					<GoToProject to={`/projects?pid=${project?.id ?? 0}`}>
						View {addEllipsis(project?.title, 25)}
					</GoToProject>
				</div>
			</div>
		</li>
	);
};

export default ProjectsItem;
