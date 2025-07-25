import { getAllProducts } from "../lib/api";
import ProductCard from "../(home)/components/ProductCard";

const ProductsPage = async () => {
  const products = await getAllProducts();
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Todos os Produtos </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
