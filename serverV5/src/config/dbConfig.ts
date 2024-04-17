export interface TDBConfig {
	user: string;
	password: string;
	host: string;
	database: string;
	port: string;
}

const DB_CONFIG: TDBConfig = {
	user: process.env.DB_USER,
	password: process.env.DB_USER_PWD,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
};

export { DB_CONFIG as dbConfig };
