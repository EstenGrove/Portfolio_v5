import { dbConfig } from "../config/dbConfig";
import { Pool, PoolConfig } from "pg";

/**
 * Create Global 'pool' once for use everywhere
 */
const pool = new Pool(dbConfig as PoolConfig);
// const client = new Client();

export { pool };
