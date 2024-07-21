import {
	PictureSource,
	Project,
	ProjectInfo,
	ProjectLinks,
	ProjectMediaSources,
} from "../features/projects/types";
import { ServerProject, ServerProjectInfo } from "../features/projects/types";
import { ServerSnippet, Snippet } from "../features/snippets/types";
import { currentEnv } from "./utils_env";

// normalizes a single project's info for the ProjectPage
const normalizeProjectInfo = (project: ServerProjectInfo): ProjectInfo => {
	const clientProject = normalizeProject(project);
	const withInfo = {
		...clientProject,
		about: project?.About,
		usecases: project?.UseCases,
		insights: project?.Insights,
		createdDate: project?.CreatedDate,
		updatedDate: project?.UpdatedDate,
		isActive: project?.IsActive,
	};

	return withInfo as ProjectInfo;
};

// Due to varied environments, we need to prefix the environment's url to the start of each 'srcSet' path
const normalizeSourceList = (
	sourceList: ProjectMediaSources
): PictureSource[] => {
	const normalList = sourceList.map((src) => ({
		...src,
		srcSet: currentEnv.assets + src.srcSet,
	}));

	return normalList;
};

const normalizeProject = (project: ServerProject): Project => {
	const record = {
		id: project?.ProjectID,
		title: project?.Title,
		desc: project?.Desc,
		alt: project?.Alt,
		listOfTech: project?.ListOfTech,
		fallbackImgSrc: project?.FallbackImgSrc,
		// sourceList: project?.SourceList,
		sourceList: normalizeSourceList(project?.SourceList),
		links: project?.Links as ProjectLinks,
	};

	return record;
};
const normalizeProjects = (projects: ServerProject[]): Project[] => {
	const records = projects.map((project) => normalizeProject(project));

	return records;
};

const normalizeSnippet = (snippet: ServerSnippet): Snippet => {
	const tags = snippet.Tags.map((tag) => ({
		id: tag.TagID,
		name: tag.Name,
		desc: tag.Desc,
	}));
	const record = {
		id: snippet?.SnippetID,
		title: snippet?.Title,
		desc: snippet?.Desc,
		codeSnippet: snippet?.CodeSnippet,
		language: snippet?.Language,
		tags: tags, // prolly need to format these
		listOfTech: snippet?.ListOfTech as string[],
		fallbackImgSrc: snippet?.FallbackImgSrc,
		sourceList: snippet?.SourceList as PictureSource[],
		links: {
			github: "",
			site: "",
		},
	};

	return record;
};
const normalizeSnippets = (snippets: ServerSnippet[]): Snippet[] => {
	const records = snippets.map((snippet) => normalizeSnippet(snippet));

	return records;
};

export {
	// projects
	normalizeProject,
	normalizeProjects,
	// selected project's page info
	normalizeProjectInfo,
	// snippets
	normalizeSnippet,
	normalizeSnippets,
};
