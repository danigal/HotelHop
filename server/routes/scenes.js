import express from "express";
import { getScenarioScenes} from "../controllers/scenes.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:scenarioId", verifyToken, getScenarioScenes)


export default router;