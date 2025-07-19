import ProductCard from "@/app/(home)/components/ProductCard";
import { getProductsByCategory } from "@/app/lib/api";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = await params;
  const products = await getProductsByCategory(category);
  return (
    <main className="container mx-auto px-4 py-8">
      <h1>{decodeURIComponent(category)}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
