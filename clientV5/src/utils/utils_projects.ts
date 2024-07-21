import { ICurrentProject } from "../features/projects/projectsSlice";
import { ServerProject } from "../features/projects/types";
import { IResponse } from "../features/types";
import { currentEnv, projects } from "./utils_env";

export type ProjectsReturn = IResponse<ServerProject[]>;
export type ProjectInfoReturn = IResponse<ICurrentProject>;

const fetchAllProjects = async (): Promise<ProjectsReturn | unknown> => {
	const url = currentEnv.base + projects.getAllProjects;

	try {
		const request = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: btoa(currentEnv.user + ":" + currentEnv.password),
			},
		});
		const response = await request.json();

		return response;
	} catch (error) {
		return error;
	}
};

const fetchProjectInfo = async (
	projectID: number
): Promise<ProjectInfoReturn | unknown> => {
	let url = currentEnv.base + projects.getProjectInfo;
	url += "?" + new URLSearchParams({ projectID: projectID.toString() });

	try {
		const request = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: btoa(currentEnv.user + ":" + currentEnv.password),
			},
		});
		const response = await request.json();

		return response;
	} catch (error) {
		return error;
	}
};

export { fetchAllProjects, fetchProjectInfo };
