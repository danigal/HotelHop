import express from "express";
//import { getScenarios, createScenario } from "../controllers/hotels.js";
import { createHotel } from "../controllers/hotels.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* CREATE */
router.post("/", createHotel);

//router.post("/", verifyToken, createScenario)

/* UPDATE */

export default router;
