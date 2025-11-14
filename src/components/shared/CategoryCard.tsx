import Link from "next/link";
import Image from "next/image";

interface CategoryConfig {
  image: string;
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
  return (
    <Link
      href={`/categories/${encodeURIComponent(categoryName)}`}
      className={`
        group relative overflow-hidden rounded-lg transition-all duration-300
        hover:shadow-lg
        h-48
      `}
    >
      <Image
        src={config.image}
        alt={categoryName}
        fill
        className="object-cover transition-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex items-end justify-center p-6">
        <h3 className="font-semibold text-white capitalize text-lg z-10">
          {categoryName.replace("'s", "'s")}
        </h3>
      </div>
    </Link>
  );
};
