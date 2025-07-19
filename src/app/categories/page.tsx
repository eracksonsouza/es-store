import { getCategories } from "../lib/api";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { getCategoryConfig } from "@/app/lib/categoryConfig";

const CategoriesPage = async () => {
  const categories = await getCategories();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Todas as Categorias
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore nossa variedade de produtos organizados por categoria
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const config = getCategoryConfig(category);

          return (
            <CategoryCard
              key={category}
              categoryName={category}
              config={config}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesPage;
