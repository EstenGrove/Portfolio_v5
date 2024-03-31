import { ALL_SKILL_FILTERS } from "../configs/skillsConfig.ts";
import { Skill, SkillFilter, SkillType } from "../configs/types";

const searchSkills = (searchVal: string, skillsList: Skill[]) => {
	const val = searchVal?.toLowerCase();
	const clonedList: Skill[] = [...skillsList];
	const results: Skill[] = clonedList.filter((entry) => {
		const { name } = entry;

		const hasMatch =
			name.toLowerCase().includes(val) || name.toLowerCase().startsWith(val);

		return hasMatch;
	});

	return results;
};

const sortSkillsByFilters = (
	filters: SkillFilter[],
	skills: Skill[]
): Skill[] => {
	if (filters.length <= 0) return skills;

	const normFilters = [...filters.map((x) => x.toLowerCase())];
	const cloned = [...skills];
	// grab skills by matching 'type' filter
	const sorted = cloned.filter((skill) => {
		const type: string = skill.type;
		const condition = normFilters.includes(type);
		return condition;
	});

	return sorted;
};

const filterAndSearchSkills = (
	searchVal: string,
	filters: string[],
	skills: Skill[]
) => {
	if (!searchVal || searchVal.length <= 0) {
		const sorted = sortSkillsByFilters(filters, skills);
		return sorted;
	} else {
		const sorted = sortSkillsByFilters(filters, skills);
		const searched = searchSkills(searchVal, sorted);
		return searched;
	}
};

const isSkillSelected = (
	filter: SkillType,
	selectedFilters: SkillFilter[]
): boolean => {
	const { name, value } = filter;
	const list = [...selectedFilters.map((x) => x.toLowerCase())];
	const isSelected =
		list.includes(name.toLowerCase()) || list.includes(value.toLowerCase());

	return isSelected;
};

// checks if all filters are selected/active
const isAllSkillsSelected = (selectedFilters: SkillFilter[]): boolean => {
	const allFilters = ALL_SKILL_FILTERS;
	const isEmpty = selectedFilters.length <= 0;
	if (isEmpty) return false;

	// const allSelected = selectedFilters === allFilters;
	const allSorted = allFilters.sort();
	const sortedSelected = selectedFilters.sort();
	const allSelected = allSorted === sortedSelected;

	return allSelected;
};

export {
	searchSkills,
	sortSkillsByFilters,
	filterAndSearchSkills,
	isSkillSelected,
	isAllSkillsSelected,
};
