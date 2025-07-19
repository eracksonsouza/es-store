import { getCategories } from "../lib/api";
import Link from "next/link";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Categorias</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/categories/${category}`}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow text-center block"
          >
            <h3 className="text-xl font-semibold capitalize">{category}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
