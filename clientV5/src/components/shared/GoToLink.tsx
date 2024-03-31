import React, { ReactNode } from "react";
import styles from "../../css/shared/GoToLink.module.scss";
import sprite from "../../assets/icons/brands.svg";
import { NavLink } from "react-router-dom";

type Props = {
	to: string; // '/about', '/home' etc
	children?: ReactNode;
};

const GoToLink = ({ to, children }: Props) => {
	return (
		<div className={styles.GoToLink}>
			<NavLink to={to}>
				{children}
				<svg className={styles.GoToLink_icon}>
					<use xlinkHref={`${sprite}#icon-arrow_forward`}></use>
				</svg>
			</NavLink>
		</div>
	);
};

export default GoToLink;

GoToLink.defaultProps = {};

GoToLink.propTypes = {};
