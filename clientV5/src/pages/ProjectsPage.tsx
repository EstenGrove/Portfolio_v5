import styles from "../css/pages/ProjectsPage.module.scss";
import { useSelector } from "react-redux";
import { selectProjects } from "../features/projects/projectsSlice";
import Title from "../components/shared/Title";

type Props = {};

const ProjectsPage = ({}: Props) => {
	const projects = useSelector(selectProjects);

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
