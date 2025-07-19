interface CategoryConfig {
  icon: string;
  colorFrom: string;
  colorTo: string;
  hoverFrom: string;
  hoverTo: string;
}

const categoryConfigs: Record<string, CategoryConfig> = {
  electronics: {
    icon: "📱",
    colorFrom: "from-blue-50",
    colorTo: "to-blue-100",
    hoverFrom: "hover:from-blue-100",
    hoverTo: "hover:to-blue-200",
  },
  jewelery: {
    icon: "💎",
    colorFrom: "from-purple-50",
    colorTo: "to-purple-100",
    hoverFrom: "hover:from-purple-100",
    hoverTo: "hover:to-purple-200",
  },
  "men's clothing": {
    icon: "👔",
    colorFrom: "from-green-50",
    colorTo: "to-green-100",
    hoverFrom: "hover:from-green-100",
    hoverTo: "hover:to-green-200",
  },
  "women's clothing": {
    icon: "👗",
    colorFrom: "from-pink-50",
    colorTo: "to-pink-100",
    hoverFrom: "hover:from-pink-100",
    hoverTo: "hover:to-pink-200",
  },
};

const defaultConfig: CategoryConfig = {
  icon: "📦",
  colorFrom: "from-gray-50",
  colorTo: "to-gray-100",
  hoverFrom: "hover:from-gray-100",
  hoverTo: "hover:to-gray-200",
};

export const getCategoryConfig = (categoryName: string): CategoryConfig => {
  return categoryConfigs[categoryName] || defaultConfig;
};

export type { CategoryConfig };