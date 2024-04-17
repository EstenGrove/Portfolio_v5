import { dbConfig } from "../config/dbConfig";
import { Pool } from "pg";

/**
 * Create Global 'pool' once for use everywhere
 */
const pool = new Pool(dbConfig);
// const client = new Client();

export { pool };
