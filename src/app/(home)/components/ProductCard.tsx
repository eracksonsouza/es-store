import { Product } from "../../types/product";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <Link href={`/products/${product.id}`} className="block h-full">
        <div className="flex flex-col h-full">
          <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center p-4">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          <div className="p-4 flex flex-col flex-grow">
            <span className="text-xs uppercase tracking-wide text-gray-500 font-medium mb-2">
              {product.category}
            </span>
            
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
              {product.title}
            </h3>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                <span className="text-yellow-400 text-sm">⭐</span>
                <span className="ml-1 text-sm font-medium text-gray-700">
                  {product.rating.rate}
                </span>
              </div>
              <span className="ml-2 text-xs text-gray-500">
                ({product.rating.count} avaliações)
              </span>
            </div>
            
            <div className="mt-auto">
              <p className="text-2xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}