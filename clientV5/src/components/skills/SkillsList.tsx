import styles from "../../css/skills/SkillsList.module.scss";
import SkillIcon from "./SkillIcon";
import { TSkill } from "../../configs/skillsConfig";

type Props = {
	searchVal: string;
	skillsList: TSkill[];
};

const SkillsList = ({ searchVal, skillsList = [] }: Props) => {
	return (
		<div className={styles.SkillsList}>
			{skillsList &&
				skillsList.map((skill, idx) => (
					<SkillIcon
						key={`SKILL--${idx}`}
						icon={skill.icon}
						label={skill.name}
						highlight={searchVal}
					/>
				))}
		</div>
	);
};
export default SkillsList;

SkillsList.defaultProps = {};

SkillsList.propTypes = {};
