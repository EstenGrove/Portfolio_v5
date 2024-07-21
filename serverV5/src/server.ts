import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { formatTime } from "./shared/third-party/date-fns";
import { apiLogin } from "./middleware/auth/authMiddleware";
// Routes
import routes_v1 from "./routes/v1/routes";
import internalRoutes_v1 from "./routes/internal/internalRoutes";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes: public-facing (includes API auth)
app.use("/api/v1", routes_v1);
// Routes: internal only (excludes API auth)
app.use("/api/v1", internalRoutes_v1);

app.listen(PORT, () => {
	console.log(
		`✅ Server was loaded/refreshed at ${formatTime(
			new Date()
		)} on port: ${PORT}`
	);
});
