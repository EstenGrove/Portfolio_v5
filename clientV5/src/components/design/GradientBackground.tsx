import React from "react";
import styles from "../../css/design/GradientBackground.module.scss";

type Props = {
	cssVar: string;
};

const GradientBackground = ({ cssVar }: Props) => {
	return (
		<div
			className={styles.GradientBackground}
			style={{ backgroundImage: `var(--${cssVar})` }}
		>
			{/*  */}
			{/*  */}
		</div>
	);
};

export default GradientBackground;

GradientBackground.defaultProps = {};

GradientBackground.propTypes = {};
