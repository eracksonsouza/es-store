import {
  Smartphone,
  Gem,
  ShirtIcon,
  Sparkles,
  Package,
  type LucideIcon,
} from "lucide-react";

interface CategoryConfig {
  icon: LucideIcon;
  colorFrom: string;
  colorTo: string;
  hoverFrom: string;
  hoverTo: string;
  iconColor: string;
}

const categoryConfigs: Record<string, CategoryConfig> = {
  electronics: {
    icon: Smartphone,
    colorFrom: "from-blue-50",
    colorTo: "to-blue-100",
    hoverFrom: "hover:from-blue-100",
    hoverTo: "hover:to-blue-200",
    iconColor: "text-blue-600",
  },
  jewelery: {
    icon: Gem,
    colorFrom: "from-purple-50",
    colorTo: "to-purple-100",
    hoverFrom: "hover:from-purple-100",
    hoverTo: "hover:to-purple-200",
    iconColor: "text-purple-600",
  },
  "men's clothing": {
    icon: ShirtIcon,
    colorFrom: "from-green-50",
    colorTo: "to-green-100",
    hoverFrom: "hover:from-green-100",
    hoverTo: "hover:to-green-200",
    iconColor: "text-green-600",
  },
  "women's clothing": {
    icon: Sparkles,
    colorFrom: "from-pink-50",
    colorTo: "to-pink-100",
    hoverFrom: "hover:from-pink-100",
    hoverTo: "hover:to-pink-200",
    iconColor: "text-pink-600",
  },
};

const defaultConfig: CategoryConfig = {
  icon: Package,
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
