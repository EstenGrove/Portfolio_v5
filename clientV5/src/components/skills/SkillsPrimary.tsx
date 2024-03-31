import styles from "../../css/skills/SkillsPrimary.module.scss";
import { TSkill } from "../../configs/skillsConfig";
import SkillIcon from "./SkillIcon";

type Props = {
	skillsList: TSkill[];
};

const SkillsPrimary = ({ skillsList }: Props) => {
	return (
		<div className={styles.SkillsPrimary}>
			<div className={styles.SkillsPrimary_desc}>
				Here's some things I use every day at work:
			</div>
			<div className={styles.SkillsPrimary_list}>
				{skillsList &&
					skillsList.map((skill, idx) => (
						<SkillIcon
							key={`SKILL-${skill.name}-${idx}`}
							icon={skill.icon}
							label={skill.name}
						/>
					))}
			</div>
		</div>
	);
};

export default SkillsPrimary;

SkillsPrimary.defaultProps = {};

SkillsPrimary.propTypes = {};
