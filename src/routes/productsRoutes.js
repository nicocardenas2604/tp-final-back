import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";
import { auth } from "../middleware/authMiddleware.js";
const productRoutes = Router();

productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/", auth, createProduct);
productRoutes.patch("/:id", auth, updateProduct);
productRoutes.delete("/:id", auth, deleteProduct);

export { productRoutes };
