import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProjects } from "../../utils/utils_projects";
import { normalizeProjects } from "../../utils/utils_data";
import { ServerProject } from "./types";
import { IResponse, IResponseData } from "../types";

const fetchProjects = createAsyncThunk("projects/fetchProjects", async () => {
	const response = (await fetchAllProjects()) as IResponse<ServerProject[]>;
	const data = response?.Data as IResponseData<ServerProject[]>;
	const normal = normalizeProjects(data?.Projects);
	return normal;
});

export { fetchProjects };
