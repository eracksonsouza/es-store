interface CategoryConfig {
  image: string;
  colorFrom: string;
  colorTo: string;
  hoverFrom: string;
  hoverTo: string;
  iconColor: string;
}

const categoryConfigs: Record<string, CategoryConfig> = {
  electronics: {
    image: "/tech-category.png",
    colorFrom: "from-blue-50",
    colorTo: "to-blue-100",
    hoverFrom: "hover:from-blue-100",
    hoverTo: "hover:to-blue-200",
    iconColor: "text-blue-600",
  
  },
  jewelery: {
    image: "/joi-category.png",
    colorFrom: "from-purple-50",
    colorTo: "to-purple-100",
    hoverFrom: "hover:from-purple-100",
    hoverTo: "hover:to-purple-200",
    iconColor: "text-purple-600",
  },
  "men's clothing": {
    image: "/men-cateogory.png",
    colorFrom: "from-green-50",
    colorTo: "to-green-100",
    hoverFrom: "hover:from-green-100",
    hoverTo: "hover:to-green-200",
    iconColor: "text-green-600",
  },
  "women's clothing": {
    image: "/womans-category.png",
    colorFrom: "from-pink-50",
    colorTo: "to-pink-100",
    hoverFrom: "hover:from-pink-100",
    hoverTo: "hover:to-pink-200",
    iconColor: "text-pink-600",
  },
};

const defaultConfig: CategoryConfig = {
  image: "/es-store.png",
  colorFrom: "from-gray-50",
  colorTo: "to-gray-100",
  hoverFrom: "hover:from-gray-100",
  hoverTo: "hover:to-gray-200",
  iconColor: "text-gray-600",
};

export const getCategoryConfig = (categoryName: string): CategoryConfig => {
  return categoryConfigs[categoryName] || defaultConfig;
};

export type { CategoryConfig };
