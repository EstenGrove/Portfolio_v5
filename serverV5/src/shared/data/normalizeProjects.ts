import {
	DBProject,
	ProjectMediaSource,
	ServerProject,
} from "../../controllers/projects/types";

const normalizeProject = (project: DBProject): ServerProject => {
	const serverRecord: ServerProject = {
		ProjectID: project?.project_id,
		Title: project?.title,
		Desc: project?.description,
		Alt: project?.alt,
		ListOfTech: project?.list_of_tech as string[],
		FallbackImgSrc: project?.fallback_img_src,
		SourceList: project?.source_list as ProjectMediaSource[],
	};

	return serverRecord;
};

const normalizeProjectsMany = (projects: DBProject[]): ServerProject[] => {
	const serverRecords = projects.map((project) => normalizeProject(project));

	return serverRecords;
};

export {
	// projects
	normalizeProject,
	normalizeProjectsMany,
};
