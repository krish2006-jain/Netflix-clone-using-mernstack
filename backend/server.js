import express from 'express';
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import movieRoutes from "./routes/movie.routes.js"
import tvRoutes from "./routes/tv.routes.js";
import searchRoutes from "./routes/search.routes.js"
import { protectRoute } from './middlewares/protectRoute.js';
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = ENV_VARS.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// Serve React frontend in production
if (ENV_VARS.NODE_ENV === 'production') {
  const frontendDistPath = path.join(__dirname, '../frontend/dist');
  app.use(express.static(frontendDistPath));
  // All non-API routes served by React
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
