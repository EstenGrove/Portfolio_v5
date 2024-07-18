import { ServerProject } from "../features/projects/types";
import { IResponse } from "../features/types";
import { currentEnv, projects } from "./utils_env";

export type ProjectsReturn = IResponse<ServerProject[]>;

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
		console.log("response", response);
		return response;
	} catch (error) {
		console.log("error", error);
		return error;
	}
};

export { fetchAllProjects };
