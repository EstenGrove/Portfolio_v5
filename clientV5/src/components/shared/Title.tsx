import { useMemo, useRef } from "react";
import styles from "../../css/shared/Title.module.scss";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

type Props = {
	title?: string;
};

const Title = ({ title }: Props) => {
	return (
		<div
			// className={isActive ? `${styles.Title} ${styles.animated}` : styles.Title}
			className={styles.Title}
		>
			<h3 className={styles.Title_heading}>
				{title}
				<b>.</b>
			</h3>
		</div>
	);
};

export default Title;

Title.defaultProps = {};

Title.propTypes = {};
