import styles from "../../css/skills/SkillFilter.module.scss";
import { TSkillFilter } from "../../configs/skillsConfig";

type Props = {
	filter: TSkillFilter;
	toggleFilter: () => void;
	isSelected: boolean;
};

const SkillsFilter = ({ filter, toggleFilter, isSelected = false }: Props) => {
	return (
		<button
			type="button"
			onClick={toggleFilter}
			className={
				isSelected
					? `${styles.SkillsFilter} ${styles.isSelected}`
					: styles.SkillsFilter
			}
		>
			{filter.name}
		</button>
	);
};

export default SkillsFilter;

SkillsFilter.defaultProps = {};

SkillsFilter.propTypes = {};
