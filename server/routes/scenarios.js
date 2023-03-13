import express from "express";
import { getScenarios, createScenario } from "../controllers/scenarios.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getScenarios)
router.post("/", verifyToken, createScenario)


/* UPDATE */

export default router;