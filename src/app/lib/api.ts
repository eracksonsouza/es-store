import { Product } from "@/app/types/product";

const BASE_URL = "https://fakestoreapi.com/products";

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export async function getProductsById(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }
  return res.json();
}
