import { QueryResult } from "pg";
import { pool } from "../dbSetup";
import { DBProject } from "../../controllers/projects/types";

// fetch all projects & their records
const getAllProjects = async (): Promise<DBProject[] | unknown> => {
	try {
		const queryStr = `SELECT * FROM projects`;
		const results = (await pool.query(queryStr)) as QueryResult<DBProject>;
		const rows = results?.rows as DBProject[];
		return rows;
	} catch (error) {
		console.log("Error ocurred: ", error);
		return error;
	}
};

export { getAllProjects };
