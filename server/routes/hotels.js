import express from "express";
//import { getScenarios, createScenario } from "../controllers/hotels.js";
import {
  createHotel,
  getHotel,
  getHotels,
  getHotelRooms,
  updateHotel,
  deleteHotel,
  countByCity,
  countByType,
} from "../controllers/hotels.js";
import { verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

/* CREATE */
router.post("/", verifyAdmin, createHotel);

//router.post("/", verifyToken, createScenario)

/* READ */
router.get("/", getHotels);
router.get("/find/:id", getHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

/* UPDATE */
router.put("/:id", verifyAdmin, updateHotel);

/* DELETE */
router.delete("/:id", verifyAdmin, deleteHotel);
export default router;
