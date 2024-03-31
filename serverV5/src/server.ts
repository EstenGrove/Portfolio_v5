import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { formatTime } from "./shared/third-party/date-fns";
// Routes
import routes_v1 from "./routes/v1/routes";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", routes_v1);

app.listen(PORT, () => {
	console.log(
		`Server was loaded/refreshed at ${formatTime(new Date())} on port: ${PORT}`
	);
});
