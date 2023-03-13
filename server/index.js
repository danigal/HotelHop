import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import scenarioRoutes from "./routes/scenarios.js";
import sceneRoutes from "./routes/scenes.js";

import { register } from "./controllers/auth.js";
import { createScene } from "./controllers/scenes.js";
import { verifyToken } from "./middleware/auth.js";

// data imports
import User from "./models/User.js";
import Scenario from "./models/Scenario.js";
import Scene from "./models/Scene.js";
import { users, scenarios } from "./data/index.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
app.post("/scenes/:scenarioId", upload.single("picture"), verifyToken, createScene);



/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/scenarios", scenarioRoutes);
app.use("/scenes", sceneRoutes);
//app.use("/spots", spotRoutes);


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    //User.insertMany(users);
    //Scenario.insertMany(scenarios);
  })
  .catch((error) => console.log(`${error} did not connect`));
