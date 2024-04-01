import styles from "../../css/skills/NoSkillFound.module.scss";

const NoSkillFound = () => {
	return (
		<div className={styles.NoSkillFound}>
			<div className={styles.NoSkillFound_text}>
				Ooops! Couldn't find that. I might not have used it before.
			</div>
		</div>
	);
};

export default NoSkillFound;

NoSkillFound.defaultProps = {};

NoSkillFound.propTypes = {};
