import { useSelector } from "react-redux";
import { selectProjects } from "../../features/projects/projectsSlice";
import styles from "../../css/projects/ProjectsSection.module.scss";
import Title from "../shared/Title";
import ProjectsList from "./ProjectsList";

// SECTION IDEA:
// <Item/> <Item/> <Item/> <Item/> <Item/>
// ----------- <SelectedItem/> -----------

const ProjectsSection = () => {
	const projects = useSelector(selectProjects);
	return (
		<section className={styles.ProjectsSection}>
			<Title title="projects" />
			<h4 className={styles.ProjectsSection_subtitle}>
				Here's a list of selected projects I've worked on:
			</h4>
			<ProjectsList projects={projects} />
			{/*  */}
			{/*  */}
		</section>
	);
};

export default ProjectsSection;

ProjectsSection.defaultProps = {};

ProjectsSection.propTypes = {};
