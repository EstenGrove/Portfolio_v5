import React, { ReactNode } from "react";
import styles from "../../css/shared/Subtitle.module.scss";

type Props = {
	children?: ReactNode;
};

const Subtitle = ({ children }: Props) => {
	return (
		<div className={styles.Subtitle}>
			<h3 className={styles.Subtitle_heading}>{children}</h3>
		</div>
	);
};

export default Subtitle;
