import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProjects, fetchProjectInfo } from "../../utils/utils_projects";
import {
	normalizeProjectInfo,
	normalizeProjects,
} from "../../utils/utils_data";
import { ServerProject, ServerProjectInfo } from "./types";
import { IResponse, IResponseData } from "../types";

const fetchProjects = createAsyncThunk("projects/fetchProjects", async () => {
	const response = (await fetchAllProjects()) as IResponse<ServerProject[]>;
	const data = response?.Data as IResponseData<ServerProject[]>;
	const normal = normalizeProjects(data?.Projects);
	return normal;
});

// fetch a single project's page info
const fetchProject = createAsyncThunk(
	"projects/fetchProject",
	async (projectID: number) => {
		const response = (await fetchProjectInfo(
			projectID
		)) as IResponse<ServerProjectInfo>;
		const data = response?.Data as IResponseData<ServerProjectInfo>;
		const normal = normalizeProjectInfo(data?.Project);

		return normal;
	}
);

export { fetchProjects, fetchProject };
