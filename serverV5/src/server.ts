import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { formatTime } from "./shared/third-party/date-fns";
import { apiLogin } from "./middleware/auth/authMiddleware";
// Routes
import routes_v1 from "./routes/v1/routes";
import internalRoutes_v1 from "./routes/internal/internalRoutes";
import path from "node:path";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// ##TODO:
// - Add error handler middleware
// app.use(errHandler)

// Routes: public-facing (includes API auth)
app.use("/api/v1", routes_v1);
// Routes: internal only (excludes API auth)
app.use("/api/v1", internalRoutes_v1);

// serving images - THIS WORKS VIA: 'http://localhost:5000/assets/images/MYIMAGE.webp'
const ASSETS_MAX_AGE = Number(process.env.CACHE_MAX_AGE) as number;
const ASSETS_DIR = process.env.ASSETS_DIR as string;
const IMAGES_DIR = path.join(ASSETS_DIR);
// app.use("/assets/images", express.static(IMAGES_DIR, { maxAge: ASSETS_MAX_AGE }));
app.use(
	"/assets/images",
	express.static(path.join(process.env.ASSETS_DIR as string), {
		cacheControl: true,
		maxAge: 86400,
		// extensions: [".webp", ".jpeg", ".png"],
	})
);

app.listen(PORT, () => {
	console.log(
		`✅ Server was loaded/refreshed at ${formatTime(
			new Date()
		)} on port: ${PORT}`
	);
});
