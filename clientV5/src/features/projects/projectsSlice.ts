import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { TStatus } from "../types";
import { fetchProjects } from "./operations";
import { Project } from "./types";

/**
 * Potential interface/type for 'state.selectedProject':
 * - contains an array of paragraphs to render out
 */
export interface ICurrentProject extends Project {
	paragraphs: string[];
	createdDate: string;
	updatedDate: string | null;
	isActive: true;
}

export interface IProjectsSlice {
	projects: Project[];
	selectedProject: Project | null;
	status: TStatus;
}

const initialState: IProjectsSlice = {
	projects: [],
	selectedProject: null,
	status: "IDLE",
};

const projectsSlice = createSlice({
	name: "projects",
	initialState: initialState,
	reducers: {
		setCurrentProject: (
			state: IProjectsSlice,
			action: PayloadAction<Project>
		) => {
			state.selectedProject = action.payload;
		},
		setCurrentProjectByID: (
			state: IProjectsSlice,
			action: PayloadAction<{ projectID: number }>
		) => {
			const projectID = action.payload.projectID;
			const project = state.projects.find((entry) => entry.id === projectID);
			state.selectedProject = project as Project;
		},
		clearCurrentProject: (state: IProjectsSlice) => {
			state.selectedProject = null;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchProjects.pending, (state) => {
				state.status = "PENDING";
			})
			.addCase(
				fetchProjects.fulfilled,
				(state, action: PayloadAction<Project[]>) => {
					state.status = "FULFILLED";
					state.projects = action.payload;
				}
			)
			.addCase(fetchProjects.rejected, (state) => {
				state.status = "REJECTED";
			});
	},
});

export const { setCurrentProject, setCurrentProjectByID, clearCurrentProject } =
	projectsSlice.actions;

export const selectProjects = (
	state: RootState
): IProjectsSlice["projects"] => {
	return state.projects.projects;
};

export const selectCurrentProject = (state: RootState) =>
	state.projects.selectedProject;

export default projectsSlice.reducer;
