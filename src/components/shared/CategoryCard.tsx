import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface CategoryConfig {
  icon: LucideIcon;
  colorFrom: string;
  colorTo: string;
  hoverFrom: string;
  hoverTo: string;
  iconColor: string;
}

interface CategoryCardProps {
  categoryName: string;
  config: CategoryConfig;
}

export const CategoryCard = ({ categoryName, config }: CategoryCardProps) => {
  const IconComponent = config.icon;

  return (
    <Link
      href={`/categories/${encodeURIComponent(categoryName)}`}
      className={`
        group p-6 rounded-lg transition-all duration-300
        bg-gradient-to-br ${config.colorFrom} ${config.colorTo}
        ${config.hoverFrom} ${config.hoverTo}
        hover:shadow-lg
      `}
    >
      <div className="text-center">
        <div
          className={`flex items-center justify-center mb-4 ${config.iconColor}`}
        >
          <IconComponent className="w-12 h-12 transition-transform group-hover:scale-110" />
        </div>
        <h3 className="font-semibold text-gray-900 capitalize">
          {categoryName.replace("'s", "'s")}
        </h3>
      </div>
    </Link>
  );
};
