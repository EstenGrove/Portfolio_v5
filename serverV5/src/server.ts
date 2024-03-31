import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { formatTime } from "./shared/third-party/date-fns";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
	console.log(
		`Server was loaded/refreshed at ${formatTime(new Date())} on port: ${PORT}`
	);
});
