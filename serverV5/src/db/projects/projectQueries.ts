import { QueryResult } from "pg";
import { pool } from "../dbSetup";
import { DBProject } from "../../controllers/projects/types";

// fetch all projects & their records
const getAllProjects = async (
	isActive: boolean = true
): Promise<DBProject[] | unknown> => {
	try {
		const queryStr = `SELECT * FROM projects WHERE is_active = $1`;
		const results = (await pool.query(queryStr, [
			isActive,
		])) as QueryResult<DBProject>;
		const rows = results?.rows as DBProject[];
		return rows;
	} catch (error) {
		console.log("Error ocurred: ", error);
		return error;
	}
};

export { getAllProjects };
