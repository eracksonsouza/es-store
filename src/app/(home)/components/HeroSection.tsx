import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {

  return (
  <section className="bg-[#0B4F6C] text-white">
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-6">Aproveite as Ofertas Especiais</h1>
        <p className="text-lg *:text-gray-200 mb-8 ">
          Descubra produtos incríveis com os melhores preços, qualidade
          garantida e entrega rápida.
        </p>
        <Link href="/products">
          <Button
            size="lg"
            className="bg-white text-[#0B4F6C] hover:bg-gray-200 cursor-pointer"
          >
            Ver Todos os Produtos
          </Button>
        </Link>
      </div>
    </div>
  </section>
  )
};
