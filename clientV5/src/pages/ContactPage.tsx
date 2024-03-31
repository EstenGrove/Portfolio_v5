import React from "react";
import styles from "../css/pages/ContactPage.module.scss";
import Title from "../components/shared/Title";

type Props = {};

const ContactPage = ({}: Props) => {
	return (
		<div className={styles.ContactPage}>
			<Title title="contact me" />
			{/*  */}
		</div>
	);
};

export default ContactPage;

ContactPage.defaultProps = {};

ContactPage.propTypes = {};
