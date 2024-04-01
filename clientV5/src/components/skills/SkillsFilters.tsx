import React from "react";
import styles from "../../css/skills/SkillsFilters.module.scss";
import { isSkillSelected } from "../../utils/utils_skills.ts";
import { TSkillFilter, TSkillFilterName } from "../../configs/skillsConfig.ts";
// components
import SkillsFilter from "./SkillsFilter";

type SelectAllProps = {
	isSelected: boolean;
	toggleSelectAll: () => void;
};

const SelectAll = ({ toggleSelectAll, isSelected = false }: SelectAllProps) => {
	return (
		<button
			type="button"
			onClick={toggleSelectAll}
			className={
				isSelected
					? `${styles.SelectAll} ${styles.isSelected}`
					: styles.SelectAll
			}
		>
			All
		</button>
	);
};

type Props = {
	filters: TSkillFilter[];
	selectedFilters: TSkillFilterName[];
	areAllFiltersSelected: boolean;
	toggleFilter: (filter: TSkillFilter) => void;
	toggleSelectAll: () => void;
};

const SkillFilters = ({
	filters,
	selectedFilters,
	areAllFiltersSelected,
	toggleFilter,
	toggleSelectAll,
}: Props) => {
	return (
		<div className={styles.SkillFilters}>
			<div className={styles.SkillFilters_filters}>
				<SelectAll
					isSelected={areAllFiltersSelected}
					toggleSelectAll={toggleSelectAll}
				/>
				{filters &&
					filters.map((filter, idx) => (
						<SkillsFilter
							key={`FILTER-${filter.name}-${idx}`}
							filter={filter}
							toggleFilter={() => toggleFilter(filter)}
							isSelected={isSkillSelected(filter, selectedFilters)}
						/>
					))}
			</div>
		</div>
	);
};

export default SkillFilters;

SkillFilters.defaultProps = {};

SkillFilters.propTypes = {};
