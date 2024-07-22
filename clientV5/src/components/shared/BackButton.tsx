import { MouseEvent } from "react";
import styles from "../../css/shared/BackButton.module.scss";
import sprite from "../../assets/icons/general.svg";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
	onClick?: (e: MouseEvent) => void;
};

const BackButton = ({ onClick }: Props) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleClick = (e: MouseEvent) => {
		navigate(-1);
		if (onClick) {
			onClick(e);
		}
	};

	if (!pathname.includes("/projects/")) {
		return null;
	}
	return (
		<button type="button" onClick={handleClick} className={styles.BackButton}>
			<svg className={styles.BackButton_icon}>
				<use xlinkHref={`${sprite}#icon-chevron-left`}></use>
			</svg>
		</button>
	);
};

export default BackButton;
