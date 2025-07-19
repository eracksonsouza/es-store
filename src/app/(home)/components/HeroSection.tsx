import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {

  return (
  <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div className="container mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Bem-vindo à Fake Store</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Descubra produtos incríveis com os melhores preços. Qualidade
          garantida e entrega rápida.
        </p>
        <Link href="/products">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
          >
            Ver Todos os Produtos
          </Button>
        </Link>
      </div>
    </div>
  </section>
  )
};
