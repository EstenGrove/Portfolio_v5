import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { TStatus } from "../types";
import { fetchProjects } from "./operations";
import { Project } from "./types";

export interface IProjectsSlice {
	projects: Project[];
	status: TStatus;
}

const initialState: IProjectsSlice = {
	projects: [],
	status: "IDLE",
};

const projectsSlice = createSlice({
	name: "projects",
	initialState: initialState,
	reducers: {
		//
	},
	extraReducers(builder) {
		builder
			.addCase(fetchProjects.pending, (state) => {
				state.status = "PENDING";
			})
			.addCase(
				fetchProjects.fulfilled,
				(state, action: PayloadAction<IProjectsSlice["projects"]>) => {
					state.status = "FULFILLED";
					state.projects = action.payload;
				}
			)
			.addCase(fetchProjects.rejected, (state) => {
				state.status = "REJECTED";
			});
	},
});

export const selectProjects = (
	state: RootState
): IProjectsSlice["projects"] => {
	return state.projects.projects;
};

export default projectsSlice.reducer;
