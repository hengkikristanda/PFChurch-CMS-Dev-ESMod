import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import router from "./routes/api.js";

// Load environment variables
dotenv.config();

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(join(__dirname, "../public")));

// Define routes using the Router
router.get("/", (req, res) => {
	res.sendFile(join(__dirname, "../public/index.html"));
});

// Use the Router for routes starting with "/app"
app.use("/app", router);

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
