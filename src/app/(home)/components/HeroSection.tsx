import Link from "next/link";
import { Button } from "@/components/ui/button";
import BannerPromocional from "@/../public/banner-promocao-semana.png";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-full relative group overflow-hidden cursor-pointer">
      <Link href="/products" className="block relative">
        <div className="relative w-full h-[400px]">
          <Image
            src={BannerPromocional}
            alt="Banner Promocional"
            fill
            quality={100}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              size="lg"
              className="bg-white text-[#0B4F6C] hover:bg-gray-200 cursor-pointer shadow-2xl"
            >
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </Link>
    </section>
  );
};
