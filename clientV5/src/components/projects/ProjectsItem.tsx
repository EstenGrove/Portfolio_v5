import React, { CSSProperties } from "react";
import styles from "../../css/projects/ProjectsItem.module.scss";
import sprite from "../../assets/icons/brands.svg";
import { Project } from "../../features/projects/types";
import { addEllipsis } from "../../utils/utils_misc";
import Picture from "../shared/Picture";
import GoToProject from "./GoToProject";

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

// REQUIREMENTS:
// - Consider creating a rotated image of each project's image
// 		- Rotated around -45degs so it goes from lower-left to upper-right w/ a matching background perhaps
// - Add a purple mask overlay w/ opacity of .4 that allows the image to bleed thru slightly
// 		- On hover, sets opacity to 1.0 for clarity of the image

const ProjectsItem = ({ project }: Props) => {
	return (
		<li className={styles.ProjectsItem}>
			<div className={styles.ProjectsItem_img}>
				<div className={styles.ProjectsItem_img_mask}></div>
				<Picture
					width={350}
					height={350}
					alt={project?.alt ?? project?.desc}
					sourceList={project?.sourceList}
					fallbackSrc={project?.fallbackImgSrc}
					style={{ borderRadius: "1rem 0 0 1rem", maxHeight: "100%" }}
				/>
			</div>
			<div className={styles.ProjectsItem_info}>
				<h6 className={styles.ProjectsItem_info_title}>{project?.title}</h6>
				<p className={styles.ProjectsItem_info_desc}>{project?.desc}</p>
				<BadgesList list={project?.listOfTech} />

				<div className={styles.ProjectsItem_info_links}>
					<IconLink link={project?.links?.github ?? ""} />
					<GoToProject to={`/projects/${project.id}`}>
						View {addEllipsis(project?.title, 20)}
					</GoToProject>
				</div>
			</div>
		</li>
	);
};

export default ProjectsItem;
