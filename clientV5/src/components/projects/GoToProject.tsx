import { ReactNode } from "react";
import styles from "../../css/projects/GoToProject.module.scss";
import sprite from "../../assets/icons/brands.svg";
import { NavLink } from "react-router-dom";

type Props = {
	to: string;
	children?: ReactNode;
};

const GoToProject = ({ to, children }: Props) => {
	return (
		<div data-link={to} className={styles.GoToProject}>
			<NavLink to={to}>
				{children}
				<svg className={styles.GoToProject_icon}>
					<use xlinkHref={`${sprite}#icon-arrow_forward`}></use>
				</svg>
			</NavLink>
		</div>
	);
};

export default GoToProject;
