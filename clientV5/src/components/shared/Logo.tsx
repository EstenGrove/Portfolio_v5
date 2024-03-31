import styles from "../../css/shared/Logo.module.scss";

const Logo = () => {
	return (
		<div className={styles.Logo}>
			<div className={styles.Logo_icon}></div>
		</div>
	);
};

const LogoText = () => {
	return (
		<div className={styles.LogoText}>
			s<b>{">"}</b>gore<b>.</b>
		</div>
	);
};

export default Logo;
export { LogoText };

Logo.defaultProps = {};

Logo.propTypes = {};
