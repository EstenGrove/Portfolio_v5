import React, { useState, useMemo } from "react";
import styles from "../../css/skills/SkillsController.module.scss";
import {
	TSkill,
	SKILL_FILTERS as skillFilters,
	ALL_SKILL_FILTERS as allFilters,
	TSkillFilterName,
	TSkillFilter,
} from "../../configs/skillsConfig.ts";
import {
	filterAndSearchSkills,
	isSkillSelected,
} from "../../utils/utils_skills.ts";
// components
import SkillsInput from "./SkillsInput";
import SkillsFilters from "./SkillsFilters";
import SkillsList from "./SkillsList.js";
import NoSkillFound from "./NoSkillFound.js";

type Props = {
	experience: TSkill[];
};

const SkillsController = ({ experience }: Props) => {
	const [searchVal, setSearchVal] = useState<string>("");
	// array of strings ('name' only)
	const [selectedFilters, setSelectedFilters] = useState<TSkillFilterName[]>([
		"Frameworks",
	]);
	const [skills, setSkills] = useState<TSkill[]>([...experience]);
	const visibleSkills: TSkill[] = useMemo(() => {
		const results: TSkill[] = filterAndSearchSkills(
			searchVal,
			selectedFilters,
			skills
		);
		return results;
	}, [selectedFilters, skills, searchVal]);
	const areAllFiltersSelected: boolean = useMemo(() => {
		const allSelected = selectedFilters.length === allFilters.length;
		return allSelected;
	}, [selectedFilters.length]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchVal(value);
	};
	const clearInput = () => {
		setSearchVal("");
		// clear search results here...
	};

	const toggleFilter = (filter: TSkillFilter) => {
		const isAlreadySelected: boolean = isSkillSelected(filter, selectedFilters);

		if (isAlreadySelected) {
			const newFilters = [
				...selectedFilters.filter((name) => name !== filter.name),
			];
			setSelectedFilters(newFilters);
		} else {
			const newFilters = [...selectedFilters, filter.name];
			setSelectedFilters(newFilters as TSkillFilterName[]);
		}
		// APPLY FILTER TO RESULTS (MAYBE THRU SIDE-EFFECT)
	};

	const toggleSelectAll = () => {
		if (areAllFiltersSelected) {
			setSelectedFilters([]);
		} else {
			setSelectedFilters([...allFilters]);
		}
	};

	return (
		<div className={styles.SkillsController}>
			<div className={styles.SkillsController_search}>
				<SkillsInput
					id="search"
					name="search"
					val={searchVal}
					handleChange={handleChange}
					clearInput={clearInput}
				/>
			</div>
			<div className={styles.SkillsController_filters}>
				<SkillsFilters
					filters={skillFilters}
					selectedFilters={selectedFilters}
					areAllFiltersSelected={areAllFiltersSelected}
					toggleFilter={toggleFilter}
					toggleSelectAll={toggleSelectAll}
				/>
			</div>
			<div className={styles.SkillsController_results}>
				{visibleSkills.length > 0 && (
					<SkillsList searchVal={searchVal} skillsList={visibleSkills} />
				)}
				{visibleSkills.length <= 0 && <NoSkillFound />}
			</div>
		</div>
	);
};

export default SkillsController;

SkillsController.defaultProps = {};

SkillsController.propTypes = {};
