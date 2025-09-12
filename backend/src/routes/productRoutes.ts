import { Router } from "express";
import { ProductController } from "../controllers/productController";

const router = Router();

router.get("/products", ProductController.getAllProducts);
router.get("/products/categories", ProductController.getCategories);
router.get(
  "/products/category/:category",
  ProductController.getProductsByCategory
);
router.get("/products/:id", ProductController.getProductById);

export default router;
