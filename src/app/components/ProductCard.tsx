import { Product } from "../types/product";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <section className="group border rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain group-hover:scale-105 transition-transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600">
          {product.title}
        </h3>
        <p className="text-xl font-bold text-green-600 mb-1">
          ${product.price.toFixed(2)}
        </p>
        <div className="flex items-center text-sm text-gray-600">
          <span className="text-yellow-500">⭐</span>
          <span className="ml-1">{product.rating.rate}</span>
          <span className="ml-1">({product.rating.count} reviews)</span>
        </div>
      </Link>
    </section>
  );
}
