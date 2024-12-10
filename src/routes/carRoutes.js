import { Router } from "express";
import {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";
import { auth } from "../middleware/authMiddleware.js";
const carRoutes = Router();

carRoutes.get("/", getAllCars);
carRoutes.get("/:id", getCarById);
carRoutes.post("/", auth, createCar);
carRoutes.patch("/:id", auth, updateCar);
carRoutes.delete("/:id", auth, deleteCar);

export { carRoutes };
