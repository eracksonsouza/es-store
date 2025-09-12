import { Request, Response } from "express";
import { ProductService } from "../services/productService";

export class ProductController {
  static async getAllProducts(req: Request, res: Response) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({
        error: "Erro ao buscar produtos",
        message: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  static async getProductById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({
          error: "Invalid product ID",
          message: "Product ID must be a number",
        });
      }

      const product = await ProductService.getProductById(id);
      res.json(product);
    } catch (error) {
      res.status(500).json({
        error: "Erro ao buscar produto",
        message: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  static async getCategories(req: Request, res: Response) {
    try {
      const categories = await ProductService.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({
        error: "Erro ao buscar categorias",
        message: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  static async getProduct(req: Request, res: Response) {
    try {
      const category = req.params.category;
      const products = await ProductService.getProductsByCategory(category);
      res.json(products);
    } catch (error) {
      res.status(500).json({
        error: "Erro ao buscar produtos por categoria",
        message: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
  static async getProductsByCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;
      const products = await ProductService.getProductsByCategory(category);
      res.json(products);
    } catch (error) {
      res.status(500).json({
        error: "Erro ao buscar produtos por categoria",
        message: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}
