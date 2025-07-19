import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Product } from "@/app/types/product";
import ProductCard from "./ProductCard";

interface FeaturedProductsProps {
  products: Product[];
}

export const FeaturedProducts = async ({ products }: FeaturedProductsProps) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Produtos em Destaque
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Confira nossa seleção especial de produtos mais vendidos
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/products">
          <Button variant="outline" size="lg">
            Ver Todos os Produtos
          </Button>
        </Link>
      </div>
    </section>
  );
};
