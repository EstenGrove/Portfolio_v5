import React from "react";
import styles from "../../css/shared/ParaBlock.module.scss";

type Props = {
	text: string;
	wordsToHighlight?: string[] | [];
};

const ParaBlock = ({ children }: Props) => {
	return (
		<div className={styles.ParaBlock}>
			{/*  */}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default ParaBlock;

ParaBlock.defaultProps = {};

ParaBlock.propTypes = {};
