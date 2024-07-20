import express, { NextFunction, Request, Response } from "express";
import { getAllProjects } from "../../db/projects/projectQueries";
import { normalizeProjectsMany } from "../../shared/data/normalizeProjects";
import { DBProject } from "./types";
import { ResponseModel } from "../../models/shared/ResponseModel";

const app = express();

// Fetch all projects from the database & return them to the client
const getProjects = async (req: Request, res: Response, next: NextFunction) => {
	const rows = (await getAllProjects()) as DBProject[];
	const normedRows = normalizeProjectsMany(rows);
	const response = new ResponseModel({
		status: "SUCCESS",
		data: {
			Projects: normedRows,
		},
		msg: `${rows?.length ?? 0} results found.`,
		results: rows?.length ?? 0,
		errorMsg: null,
		errorStack: null,
	});

	res.status(200).json(response);
};

app.get("/GetProjects", getProjects);

export { getProjects };
