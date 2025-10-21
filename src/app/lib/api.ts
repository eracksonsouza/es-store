import { Product } from "@/app/types/product";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://fakestoreapi.com";

export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProductsById(id: string): Promise<Product> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.error(
        `Failed to fetch product ${id}: ${res.status} ${res.statusText}`
      );
      throw new Error(`Failed to fetch product with id ${id}`);
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
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
  try {
    const res = await fetch(`${BASE_URL}/products/category/${category}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.error(
        `Failed to fetch category ${category}: ${res.status} ${res.statusText}`
      );
      throw new Error(`Failed to fetch products for category ${category}`);
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching category ${category}:`, error);
    throw error;
  }
}
