import { getProductsById } from "@/app/lib/api";
import { Button } from "@/components/ui/button";
import AddToCartButton from "@/components/cart/AddToCartButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import VirtualFittingRoomButton from "./components/VirtualFittingRoomButton";

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
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/products">Produtos</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={`/categories/${productData.category}`}
                  className="capitalize"
                >
                  {productData.category}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-xs truncate">
                {productData.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative h-96 lg:h-[500px]">
          <Image
            src={productData.image}
            alt={productData.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-6">
          <h1 className="font-bold text-4xl">{productData.title}</h1>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-green-600">
              ${productData.price.toFixed(2)}
            </span>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-yellow-500">
                <Star size={16} />
              </span>
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
            <div className="flex gap-4 flex-wrap">
              <AddToCartButton product={productData} />
              <Button variant="outline" className="cursor-pointer">
                Comprar Agora
              </Button>
              <VirtualFittingRoomButton
                productTitle={productData.title}
                category={productData.category}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProdutcPage;
