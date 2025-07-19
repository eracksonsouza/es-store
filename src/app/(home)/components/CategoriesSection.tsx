import { getCategories } from "@/app/lib/api";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { getCategoryConfig } from "@/app/lib/categoryConfig";

export const CategoriesSection = async () => {
  const categories = await getCategories();

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Categorias
          </h2>
          <p className="text-gray-600">
            Encontre exatamente o que você procura
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((categoryName) => {
            const config = getCategoryConfig(categoryName);
            
            return (
              <CategoryCard
                key={categoryName}
                categoryName={categoryName}
                config={config}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};