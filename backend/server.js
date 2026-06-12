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

dotenv.config();
const app = express();
const PORT =ENV_VARS.PORT;
app.use(express.json());//allow to parse this value 
app.use(cookieParser());

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie",protectRoute,movieRoutes);//movie recommended
app.use("/api/v1/tv",protectRoute,tvRoutes);//tv recommended
app.use("/api/v1/search",protectRoute,searchRoutes);//tv recommended
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  connectDB();
});

