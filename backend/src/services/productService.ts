import { Product } from "../types/product";

const BASE_URL = "https://fakestoreapi.com/products";

export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }
    return response.json();
  }

  static async getProductById(id: number): Promise<Product> {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar produto");
    }
    return response.json();
  }

  static async getCategories(): Promise<string[]> {
    const response = await fetch(`${BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error("Erro ao buscar categorias");
    }
    return response.json();
  }

  static async getProductsByCategory(category: string): Promise<Product[]> {
    const response = await fetch(`${BASE_URL}/category/${category}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar produtos por categoria");
    }
    return response.json();
  }
}
