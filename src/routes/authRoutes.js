import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import { auth } from "../middleware/authMiddleware.js";
import { getAllProducts } from "../controllers/productController.js";

const authRoutes = Router();

authRoutes.post("/register", register);

export { authRoutes };
