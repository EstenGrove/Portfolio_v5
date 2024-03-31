import React from "react";
import styles from "../css/pages/SnippetsPage.module.scss";
import Title from "../components/shared/Title";

type Props = {};

const SnippetsPage = ({}: Props) => {
	return (
		<div className={styles.SnippetsPage}>
			<Title title="snippets" />
			{/*  */}
			{/*  */}
		</div>
	);
};

export default SnippetsPage;

SnippetsPage.defaultProps = {};

SnippetsPage.propTypes = {};
