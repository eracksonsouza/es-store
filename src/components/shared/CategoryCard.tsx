import Link from "next/link";

interface CategoryConfig {
  icon: string;
  colorFrom: string;
  colorTo: string;
  hoverFrom: string;
  hoverTo: string;
}

interface CategoryCardProps {
  categoryName: string;
  config: CategoryConfig;
}

export const CategoryCard = ({ categoryName, config }: CategoryCardProps) => {
  return (
    <Link
      href={`/categories/${encodeURIComponent(categoryName)}`}
      className={`
        group p-6 rounded-lg transition-colors duration-300
        bg-gradient-to-br ${config.colorFrom} ${config.colorTo}
        ${config.hoverFrom} ${config.hoverTo}
      `}
    >
      <div className="text-center">
        <div className="text-4xl mb-4">{config.icon}</div>
        <h3 className="font-semibold text-gray-900 capitalize">
          {categoryName.replace("'s", "'s")}
        </h3>
      </div>
    </Link>
  );
};
