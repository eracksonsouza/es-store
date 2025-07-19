import { getAllProducts } from "../lib/api";
import { CategoriesSection } from "./components/CategoriesSection";
import { CTASection } from "./components/CTASection";
import { FeaturedProducts } from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";

const HomePage = async () => {
  const products = await getAllProducts();
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <FeaturedProducts products={products} />
      <CategoriesSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default HomePage;
