import React from "react";
import styles from "../css/pages/BlogPage.module.scss";
import Title from "../components/shared/Title";

type Props = {};

const BlogPage = ({}: Props) => {
	return (
		<div className={styles.BlogPage}>
			<Title title="blog" />
			{/*  */}
			{/*  */}
		</div>
	);
};

export default BlogPage;

BlogPage.defaultProps = {};

BlogPage.propTypes = {};
