import { Product } from "@/app/types/product";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api";

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export async function getProductsById(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }
  return res.json();
}

export async function getCategories(): Promise<string[]> {
  try {
    // Primeiro tenta a rota de categorias
    console.log(
      "Trying categories endpoint:",
      `${BASE_URL}/products/categories`
    );
    const res = await fetch(`${BASE_URL}/products/categories`);

    if (res.ok) {
      const data = await res.json();
      console.log("Categories from endpoint:", data);
      return data;
    }

    console.log("Categories endpoint failed, extracting from products...");

    // Se falhar, busca todos os produtos e extrai as categorias
    const products = await getAllProducts();
    const categories = [
      ...new Set(products.map((product: Product) => product.category)),
    ];

    console.log("Extracted categories:", categories);
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);

    // Como último recurso, retorna categorias padrão
    console.log("Using fallback categories");
    return ["electronics", "jewelery", "men's clothing", "women's clothing"];
  }
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch products for category ${category}`);
  }
  return res.json();
}
