import { getProductsById } from "@/app/lib/api";
import { Button } from "@/components/ui/button";
import AddToCartButton from "@/components/cart/AddToCartButton";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{
    product: string;
  }>;
}

const ProdutcPage = async ({ params }: ProductPageProps) => {
  const { product } = await params;
  const productData = await getProductsById(product);
  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-500 ">
          Home
        </Link>
        <span className="mx-2"> › </span>

        <Link href="/products" className="hover:text-blue-500">
          Produtos
        </Link>
        <span className="mx-2"> › </span>

        <Link
          href={`/categories/${productData.category}`}
          className="hover:text-blue-600 capitalize"
        >
          {productData.category}
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 truncate underline">
          {productData.title}
        </span>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* imagem do produto */}
        <div className="relative h-96 lg:h-[500px]">
          <Image
            src={productData.image}
            alt={productData.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* detalhes do produto */}
        <div className="space-y-6">
          <h1 className="font-bold text-4xl">{productData.title}</h1>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-green-600">
              ${productData.price.toFixed(2)}
            </span>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-yellow-500">⭐</span>
              <span className="ml-1">{productData.rating.rate}</span>
              <span className="ml-1">({productData.rating.count} reviews)</span>
            </div>
            <div>
              <span className="text-sm text-gray-500">
                Category: {productData.category}
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">{productData.description}</p>
            <div className="flex gap-4">
              <AddToCartButton product={productData} />
              <Button variant="outline" className="cursor-pointer">
                {" "}
                Comprar Agora{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProdutcPage;
